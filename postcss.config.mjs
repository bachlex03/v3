import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcssPresetEnv from 'postcss-preset-env'

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true,
        'logical-properties-and-values': true,
      },
    }),
    // Uncomment để minify CSS trong production
    process.env.NODE_ENV === 'production' && cssnano({ preset: 'default' }),
  ].filter(Boolean),
}
