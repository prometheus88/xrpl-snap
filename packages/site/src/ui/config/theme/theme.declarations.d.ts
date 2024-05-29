import 'styled-components';
import type {
  Theme,
  TypographyVariant,
  Theme,
  TypographyVariant,
} from '@peersyst/react-components';
import type { CSSProp } from 'styled-components';

import type { ThemeSpacing, ThemeSpacing } from '../spacing';

import 'styled-components/cssprop';

// Custom components theme
declare module '@peersyst/react-components' {
  export interface ThemePalette {
    accent: string;
    white: string;
    black: string;
    disabledColor: string;
    purple: {
      '30': string;
      '40': string;
      '50': string;
      '70': string;
      '80': string;
      '90': string;
    };
    blue: {
      '30': string;
      '40': string;
      '90': string;
    };
    green: {
      '40': string;
      '30': string;
      '100': string;
    };
    magenta: {
      '90': string;
    };
    orange: {
      '20': string;
      '30': string;
      '90': string;
      '100': string;
    };
    grey: {
      '100': string;
      '200': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
    };
    error: {
      '100': string;
      '200': string;
    };
    placeholder: string;
    light: string;
  }

  export type CreateThemeTypography = {};

  export interface TypographyVariantsOverrides {
    subtitle1: false;
    subtitle2: false;
  }

  export interface Theme {
    fromControl: {
      horizontalPadding: string;
      inputHeight: string;
    };
    borderRadiusSm: string;
    borderRadiusXl: string;
    spacing: ThemeSpacing;
    roundedBorder: string;
  }

  export interface CreateTheme {
    fromControl: {
      horizontalPadding: string;
      inputHeight: string;
    };
    borderRadiusSm: string;
    borderRadiusXl: string;
    spacing: ThemeSpacing;
    roundedBorder: string;
  }
}

// Type styled components theme with our components theme
declare module 'styled-components' {
  export type DefaultTheme = {} & Theme;
}

// Use css prop in components
declare module 'react' {
  export type Attributes = {
    css?: CSSProp<Theme>;
  };
}
