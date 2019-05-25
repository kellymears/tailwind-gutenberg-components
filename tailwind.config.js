module.exports = {
  theme: {
    //...
    gutenberg: theme => ({
      supports: {
        wideAlignments: true,
        wpGenerated: {
          fontSizes: true,
        },
      },
      screens: {
        'sm': theme('screens.sm'),
        'md': theme('screens.md'),
        'lg': theme('screens.lg'),
        'xl': theme('screens.xl'),
      },
      contentWidths: {
        xs: {
          normal: theme('maxWidth.xl'),
          wide: theme('maxWidth.full'),
          full: theme('maxWidth.full'),
        },
        sm: {
          normal: theme('maxWidth.2xl'),
          wide: theme('maxWidth.full'),
          full: theme('maxWidth.full'),
        },
        md: {
          normal: theme('maxWidth.3xl'),
          wide: theme('maxWidth.4xl'),
          full: theme('maxWidth.full'),
        },
        lg: {
          normal: theme('maxWidth.4xl'),
          wide: theme('maxWidth.5xl'),
          full: theme('maxWidth.full'),
        },
        xl: {
          normal: theme('maxWidth.5xl'),
          wide: theme('maxWidth.6xl'),
          full: theme('maxWidth.full'),
        },
      },
      colors: {
        'native-scarlet': theme('colors.primary.default'),
        'kuroi': theme('colors.secondary'),
      },
      fontFamily: {
        'h1': theme('fontFamily.display'),
        'h2': theme('fontFamily.display'),
        'h3': theme('fontFamily.display'),
        'h4': theme('fontFamily.display'),
        'h5': theme('fontFamily.serif'),
        'h6': theme('fontFamily.serif'),
        'p': theme('fontFamily.serif'),
        'ul': theme('fontFamily.serif'),
        'ol': theme('fontFamily.serif'),
        'table': theme('fontFamily.sans'),
      },
      fontSizes: {
        'h1': theme('fontSize.4xl'),
        'h2': theme('fontSize.3xl'),
        'h3': theme('fontSize.2xl'),
        'h4': theme('fontSize.xl'),
        'h5': theme('fontSize.lg'),
        'h6': theme('fontSize.lg'),
        // wordpress generated fontsizes
        wpGenerated: {
          small: '12px',
          normal: '16px',
          large: '36px',
          huge: '50px',
        },
      },
      /**
       * Keys for `gutenberg.images.figCaption.textAlign`
       * map to the alignment of the containing block
       */
      images: {
        figCaption: {
          textAlign: {
            left: 'left',
            right: 'right',
            center: 'center',
            wide: 'center',
          },
          fontFamily: theme('fontFamily.sans'),
        },
      },
      lists: {
        unorderedStyle: 'square',
        orderedStyle: 'lower-roman',
        inset: theme('spacing.2'),
      },
      columnGap: theme('spacing.2'),
      rowGap: {
        default: theme('spacing.8'),
        wide: theme('spacing.12'),
        full: theme('spacing.16'),
      },
      blocks: {
        cover: {
          verticalPadding: theme('spacing.64'),
        },
      },
    }),
  // ...
  },
  // ...
  plugins: [
    require('./src/base'),
    require('./src/columns'),
    require('./src/typography'),
    require('./src/colors'),
    require('./src/image'),
    require('./src/video'),
    require('./src/block-cover'),
  ]
}