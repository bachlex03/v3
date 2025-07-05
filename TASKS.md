# Portfolio v3 Implementation

A modern React TypeScript portfolio website showcasing projects, skills, and professional experience.

## 📋 Task Management

### Section 1: Tasks by Priority

#### High Priority Tasks

1. [x] Setup base project structure: assets folder (contain e.g. fonts, images,...)
2. [x] Setup Tailwind CSS (fonts, tailwind merge + clsx, tailwind animate, tailwind motion, tailwind, light/dark theme, custom screen breakpoint + color)
3. [x] Set up project routing with React Router
4. [ ] Create layout components (Header, Footer, Layout wrapper)
5. [ ] Implement responsive navigation menu
6. [x] Set up CSS framework (Tailwind CSS or CSS Modules)
7. [ ] Configure path aliases in TypeScript and Vite
8. [ ] Create Homepage with Hero section
9. [ ] Build Projects page with project grid
10. [ ] Develop About page with professional info
11. [ ] Implement Contact page with form

#### Medium Priority Tasks

12. [ ] Design and implement reusable Button component with variants
13. [ ] Create Card component for project display
14. [ ] Build Modal component for project details
15. [ ] Develop Form components (Input, Textarea, Select)
16. [ ] Implement Loading/Spinner component
17. [ ] Create Section wrapper component for consistent spacing
18. [ ] Add smooth scrolling navigation
19. [x] Implement dark/light theme toggle
20. [ ] Add page transition animations
21. [ ] Create typing animation for hero text
22. [ ] Implement lazy loading for images
23. [ ] Add scroll-triggered animations

#### Low Priority Tasks

24. [ ] Integrate GitHub API for live project data
25. [ ] Add blog/articles section
26. [ ] Implement multi-language support
27. [ ] Create admin panel for content management
28. [ ] Add visitor analytics
29. [ ] Implement PWA features
30. [ ] Optimize bundle size
31. [ ] Set up CI/CD pipeline
32. [ ] Configure SEO meta tags
33. [ ] Implement sitemap generation
34. [ ] Add Open Graph tags for social sharing
35. [ ] Deploy to hosting platform (Vercel/Netlify)

### Section 2: Tasks by Status

#### Completed Tasks

- [x] Initialize React + TypeScript + Vite project
- [x] Set up rules
- [x] Set up base project structure: eslint + husky + github action ci
- [x] **Task #1**: Setup base project structure: assets folder (contain e.g. fonts, images,...)
- [x] **Task #2**: Setup Tailwind CSS (fonts, tailwind merge + clsx, tailwind animate, tailwind motion, tailwind, light/dark theme, custom screen breakpoint + color)
- [x] **Task #3**: Set up project routing with React Router
- [x] **Task #6**: Set up CSS framework (Tailwind CSS or CSS Modules)
- [x] **Task #19**: Implement dark/light theme toggle

#### In Progress Tasks

_(No tasks currently in progress)_

## Section 3: Implementation Plan

### Phase 1: Setup project structure (Current)

1. **Initialize project structure and styling system**

   - Setup folders & files
   - Setup fonts

2. **Styling System**
   - Combine between Tailwind CSS, CSS Modules and SASS
   - Set up global styles and CSS variables
   - Create consistent spacing and color system

### Phase 2: Foundation

1. **Routing & Navigation**

   - Install and configure React Router
   - Create route structure for all pages
   - Build responsive navigation component

2. **Styling System**
   - Choose between Tailwind CSS or CSS Modules
   - Set up global styles and CSS variables
   - Create consistent spacing and color system

### Phase 3: Core Pages

1. **Homepage**

   - Hero section with introduction
   - Skills showcase
   - Featured projects preview
   - Call-to-action for contact

2. **Projects Page**

   - Grid layout for project cards
   - Filter by technology/category
   - Modal or detail view for each project

3. **About Page**

   - Professional summary
   - Skills and technologies
   - Experience timeline
   - Education and certifications

4. **Contact Page**
   - Contact form with validation
   - Social media links
   - Professional email
   - Optional: Calendar booking integration

### Phase 4: Polish & Deploy

- Performance optimization
- Accessibility improvements
- Cross-browser testing
- Mobile responsiveness fine-tuning
- Final deployment

### Relevant Files

- `src/App.tsx` - Main application component ✅
- `src/main.tsx` - Application entry point ✅
- `src/components/btn.tsx` - Button component (to be refactored) ✅
- `src/router/index.tsx` - Router configuration (to be created)
- `src/layouts/MainLayout.tsx` - Main layout wrapper (to be created)
- `src/pages/Home.tsx` - Homepage component (to be created)
- `src/pages/Projects.tsx` - Projects page (to be created)
- `src/pages/About.tsx` - About page (to be created)
- `src/pages/Contact.tsx` - Contact page (to be created)
- `src/styles/globals.css` - Global styles (to be created)
- `src/hooks/useTheme.ts` - Theme management hook (to be created)
- `src/utils/constants.ts` - App constants (to be created)

## Task Management Rules

### Current Workflow

1. **One task at a time** - Chỉ làm 1 công việc tại một thời điểm
2. **Mark as "current doing"** - Khi bắt đầu task, đánh dấu "current doing"
3. **Move to In Progress** - Copy task sang phần "In Progress Tasks"
4. **Mark completed** - Sau khi hoàn thành, thay đổi `[ ]` thành `[x]`

### Next Task to Implement

**Current Priority**: Create layout components (Header, Footer, Layout wrapper) (Task #4)

## Notes

- Focus on mobile-first responsive design
- Ensure accessibility standards (WCAG 2.1 AA)
- Keep performance metrics in mind (Lighthouse score > 90)
- Use TypeScript strict mode for better type safety
- Follow React best practices and hooks patterns
- Consider SEO from the beginning
