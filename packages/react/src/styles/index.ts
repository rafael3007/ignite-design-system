import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    sizes: fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },
})
