/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const Palette = {
  deepTeal: '#003833',
  forest: '#014C46',
  evergreen: '#0E6A60',
  duskTeal: '#1C6E66',
  mist: '#6CB8AD',
  sand: '#DDB08C',
  sandLight: '#F0CBB0',
  clay: '#6E7070',
  coral: '#E89274',
  pistachio: '#8AD0B3',
  charcoal: '#0C1917',
  night: '#021210',
};

export const Colors = {
  light: {
    text: Palette.sandLight,
    background: Palette.forest,
    tint: Palette.sand,
    icon: Palette.mist,
    surface: Palette.deepTeal,
    surfaceMuted: '#08413B',
    warning: Palette.coral,
    positive: Palette.pistachio,
    tabIconDefault: Palette.mist,
    tabIconSelected: Palette.sand,
  },
  dark: {
    text: Palette.sandLight,
    background: Palette.night,
    tint: Palette.sand,
    icon: Palette.mist,
    surface: '#072321',
    surfaceMuted: '#031715',
    warning: Palette.coral,
    positive: Palette.pistachio,
    tabIconDefault: Palette.mist,
    tabIconSelected: Palette.sand,
  },
};

export { Palette };

export const Gradients = {
  canopy: [Palette.evergreen, Palette.deepTeal, Palette.charcoal],
  bloom: [Palette.sandLight, Palette.sand],
  dusk: ['#0A4D47', Palette.deepTeal],
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
