module.exports = ({ addComponents, theme }) => {
  const opts = theme('gutenberg')
  const specialAlignment = {
    '.wp-block-embed.alignfull, .wp-block-embed.alignwide': {
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: opts.rowGap,
      marginBottom: opts.rowGap,

      'iframe, video': {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  }

  const alignLeft = {
    '.wp-block-embed .alignleft': {
      float: 'left',
      maxWidth: '50%',

      'iframe': {
        width: '100%',
        paddingRight: theme('gutenberg.columnGap'),
      },
    },
  }

  const alignRight = {
    '.wp-block-embed .alignRight': {
      float: 'right',
      maxWidth: '50%',

      'iframe': {
        width: '100%',
        paddingLeft: theme('gutenberg.columnGap'),
      },
    },
  }

  const alignNone = {
    '.wp-block-embed:not(.alignleft):not(.alignright):not(.alignfull):not(.alignwide)': {
      width: '100%',

      'iframe, div, span': {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: theme('gutenberg.rowGap'),
        paddingBottom: theme('gutenberg.rowGap'),
      },
    },
  }

  addComponents([
    specialAlignment,
    alignLeft,
    alignRight,
    alignNone,
  ])
}
