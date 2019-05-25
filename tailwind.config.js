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

    /**
     * Tailwind/Gutenberg
     *
     * @link https://github.com/kellymears/tailwind-gutenberg-components
     */

    /**
     * Container settings
     *
     * Required config keys:
     *  `gutenberg.contentWidths`
     *  `gutenberg.rowGap`
     *  `gutenberg.screens`
     */
    require('./src/tailwind/tailwindcss-block-editor/container'),

    /**
     * Base typographic settings
     *
     * Required config keys:
     *  `gutenberg.fontFamily`,
     *  `gutenberg.fontSizes`,
     *  `gutenberg.fontSizes.wpGenerated`,
     */
    require('./src/tailwind/tailwindcss-block-editor/typography'),

    /**
     * Base color settings
     *
     * Required config keys:
     *  `gutenberg.colors`
     */
    require('./src/tailwind/tailwindcss-block-editor/colors'),

    /**
     * Aspect ratio utilities
     *
     * Currently bugged  😭
     *
     * I have no idea why the aspectRatios classes are not
     * included in the compiled css
     */
    require('./src/tailwind/tailwindcss-block-editor/aspect-ratios'),

    /**
     * Supports columnar layouts
     *
     * Supports:
     *  `wp-block-columns`
     *  `wp-block-column`
     *  `wp-block-group`
     *
     * Required config keys:
     *  `gutenberg.screens`
     *  `gutenberg.columnGap`
     */
    require('./src/tailwind/tailwindcss-block-editor/columns'),

    /**
     * Supports embed blocks
     *
     * Supports:
     *  `wp-block-embed`
     *
     * Required config keys:
     *  ``
     */
    require('./src/tailwind/tailwindcss-block-editor/block-embed'),

    /**
     * Supports image blocks
     *
     * Supports:
     *  `wp-block-image`
     *
     * Required config keys:
     *  `gutenberg.supports.wideAlignments`
     *  `gutenberg.images`
     *  `gutenberg.rowGap`
     *  `gutenberg.columnGap`
     */
    require('./src/tailwind/tailwindcss-block-editor/block-image'),

    /**
     * #TODO Add docs
     */
    require('./src/tailwind/tailwindcss-block-editor/block-video'),

    /**
     * #TODO Add docs
     */
    require('./src/tailwind/tailwindcss-block-editor/block-cover'),
  ]
}