const _ = require('lodash')

module.exports = ({addComponents, theme}) => {
  const general = {
    '.wp-block-image': {
      'figcaption': {
        fontFamily: `${
          theme('gutenberg.images.figCaption.fontFamily').map(font => font)
        }`,
      },
    },
  }

  const specialAlignment = {
    '.wp-block-image.alignfull, .wp-block-image.alignwide': {
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: 'auto',
      marginRight: 'auto',

      'img': {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },

      'figcaption': {
        paddingTop: theme('gutenberg.columnGap'),
        textAlign:  theme('gutenberg.images.figCaption.textAlign.wide'),
      },
    },
  }

  const alignLeft = {
    '.wp-block-image .alignleft': {
      float: 'left',
      maxWidth: '50%',

      'img': {
        width: '100%',
        paddingTop: theme('gutenberg.columnGap'),
        paddingRight: theme('gutenberg.rowGap.default'),
      },

      'figcaption': {
        textAlign: theme('gutenberg.images.figCaption.textAlign.left'),
        padding: `
          ${theme('gutenberg.columnGap')}
          ${theme('gutenberg.rowGap.default')}
          ${theme('gutenberg.columnGap')}
          0
        `,
      },
    },
  }

  const alignRight = {
    '.wp-block-image .alignright': {
      float: 'right',
      maxWidth: '50%',

      'img': {
        width: '100%',
        paddingTop: theme('gutenberg.columnGap'),
        paddingLeft: theme('gutenberg.rowGap.default'),
      },

      'figcaption': {
        textAlign: theme('gutenberg.images.figCaption.textAlign.right'),
        padding: `
          ${theme('gutenberg.columnGap')}
          0
          ${theme('gutenberg.columnGap')}
          ${theme('gutenberg.rowGap.default')}
        `,
      },
    },
  }

  addComponents([
    general,
    alignLeft,
    alignRight,
  ])

  theme('gutenberg.supports.wideAlignments') && (
    addComponents(specialAlignment)
  )
}
