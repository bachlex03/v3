# Stage 1: Build the application
FROM node:22-alpine AS build

WORKDIR /app

# Copy dependency manifests
COPY package.json yarn.lock ./

# Install dependencies
# Using --frozen-lockfile to ensure consistent builds
RUN yarn install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the project
RUN yarn build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

# Copy the built assets from the previous stage to Nginx's serving directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
