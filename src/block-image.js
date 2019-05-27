module.exports = ({ addComponents, theme }) => {
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
    },
  }

  addComponents([
    specialAlignment,
    alignLeft,
    alignRight,
  ])

  theme('gutenberg.supports.wideAlignments') && (
    addComponents(specialAlignment)
  )
}
