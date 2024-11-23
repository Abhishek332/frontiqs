import aspectRatioPlugin from '@tailwindcss/aspect-ratio';
import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

import COLORS from './styles/colors';
import Typography from './styles/typography';

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enables dark mode with class
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        neutral: COLORS.neutral,
        background: COLORS.background,
        glass: COLORS.glass,
        accent: COLORS.accent,
      },
      fontFamily: Typography.fontFamily,
      fontWeight: Typography.fontWeight,
      letterSpacing: Typography.letterSpacing,
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        neumorphic:
          '8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.7)',
        glass: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [formsPlugin, typographyPlugin, aspectRatioPlugin],
};
