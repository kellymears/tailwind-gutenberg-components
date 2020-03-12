module.exports = ({ addComponents, theme }) => {
  const specialAlignments = {
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
        paddingRight: theme('gutenberg.spacing.horizontal'),
      },
    },
  }

  const alignRight = {
    '.wp-block-image .alignright': {
      float: 'right',
      maxWidth: '50%',

      'img': {
        width: '100%',
        paddingLeft: theme('gutenberg.spacing.horizontal'),
      },
    },
  }

  addComponents([
    alignLeft,
    alignRight,
  ])

  theme('gutenberg.supports.wideAlignments')
    && addComponents(specialAlignments)
}
