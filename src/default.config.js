/**
 * Default gutenberg components config
 */
module.exports = theme => ({
  /**
   * Wrapping element
   */
  wrapper: {
    'selector': '.entry-content',
  },

  /**
   * Support certain feature subsets
   */
  supports: {
    wideAlignments: true,
    userTypeScale: true,
    fixedLayoutTable: true,
  },

  /**
   * Support block styles
   */
  styles: {
    'stripes': true,
  },

  /**
   * Screensizes for @media queries
   */
  screens: {
    'sm': theme('screens.sm'),
    'md': theme('screens.md'),
    'lg': theme('screens.lg'),
    'xl': theme('screens.xl'),
  },

  /**
   * Block contents
   */
  blockContent: {
    maxWidth: {
      xs: {
        normal: theme('maxWidth.xl'),
        wide:   theme('maxWidth.full'),
        full:   theme('maxWidth.full'),
      },
      sm: {
        normal: theme('maxWidth.2xl'),
        wide:   theme('maxWidth.full'),
        full:   theme('maxWidth.full'),
      },
      md: {
        normal: theme('maxWidth.3xl'),
        wide:   theme('maxWidth.4xl'),
        full:   theme('maxWidth.full'),
      },
      lg: {
        normal: theme('maxWidth.4xl'),
        wide:   theme('maxWidth.5xl'),
        full:   theme('maxWidth.full'),
      },
      xl: {
        normal: theme('maxWidth.5xl'),
        wide:   theme('maxWidth.6xl'),
        full:   theme('maxWidth.full'),
      },
    },
  },

  /**
   * Spacing units
   */
  spacing: {
    horizontal: theme('spacing.4'),
    vertical: {
      default: theme('spacing.8'),
      wide: theme('spacing.12'),
      full: theme('spacing.16'),
    },
  },

  /**
   * Wordpress generated colors
   * @link https://git.io/Jv6Oc
   */
  colors: {
    'indigo': theme('colors.indigo.900'),
  },

  /**
   * Typography
   */
  typography: {
    fontFamily: {
      'h1': theme('fontFamily.sans'),
      'h2': theme('fontFamily.sans'),
      'h3': theme('fontFamily.sans'),
      'h4': theme('fontFamily.sans'),
      'h5': theme('fontFamily.sans'),
      'h6': theme('fontFamily.sans'),
      'p':  theme('fontFamily.serif'),
      'ul': theme('fontFamily.serif'),
      'ol': theme('fontFamily.serif'),
      'figcaption': theme('fontFamily.sans'),
      'table': theme('fontFamily.sans'),
      'code': theme('fontFamily.mono'),
      'pre': theme('fontFamily.mono'),
    },

    fontSize: {
      'h1': theme('fontSize.4xl'),
      'h2': theme('fontSize.3xl'),
      'h3': theme('fontSize.2xl'),
      'h4': theme('fontSize.xl'),
      'h5': theme('fontSize.lg'),
      'h6': theme('fontSize.lg'),
      'p': theme('fontSize.base'),
      'ul': theme('fontSize.base'),
      'ol': theme('fontSize.base'),
      'figcaption': theme('fontSize.sm'),
      'table': theme('fontSize.base'),
      'code': theme('fontSize.base'),
      'pre': theme('fontSize.base'),

      /**
       * WordPress generated type scale
       * @link https://git.io/Jv6Oc
       */
      userScale: {
        small:  '12px',
        normal: '16px',
        large:  '36px',
        huge:   '50px',
      },
    },

    fontColor: {
      'h1': theme('colors.gray.900'),
      'h2': theme('colors.gray.900'),
      'h3': theme('colors.gray.900'),
      'h4': theme('colors.gray.800'),
      'h5': theme('colors.gray.800'),
      'h6': theme('colors.gray.800'),
      'p': theme('colors.gray.700'),
      'ul': theme('colors.gray.700'),
      'ol': theme('colors.gray.700'),
      'figcaption': theme('colors.gray.700'),
      'table': theme('colors.gray.700'),
      'code': theme('colors.gray.700'),
      'pre': theme('colors.gray.700'),
    },
  },

  /**
   * Keys for `gutenberg.figCaption.textAlign`
   * map to the alignment of the containing block
   */
  figCaption: {
    textAlign: {
      left:   'left',
      right:  'right',
      center: 'center',
      wide:   'center',
    },
  },

  /**
   * Lists: unordered & ordered
   */
  lists: {
    inset: theme('spacing.2'),
    orderedStyle: 'lower-roman',
    unorderedStyle: 'square',
  },

  /**
   * Block specific configuration values
   */
  blocks: {
    /**
     * core/cover
     */
    cover: {
      contentColor: theme('colors.white'),
      verticalPadding: theme('spacing.64'),
      itemsSpacing: theme('spacing.4'),
    },

    /**
     * core/table
     */
    table: {
      head: {
        fontWeight: theme('fontWeight.semibold'),
      },
      cell: {
        borderColor: theme('colors.gray.200'),
        borderWidth: theme('borderWidth.default'),
        padding: theme('spacing.2'),
      },
      stripes: {
        color: theme('colors.gray.100'),
      },
    },
  },
})