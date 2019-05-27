module.exports = ({ addComponents, theme }) => {
  const figCaption = {
    'figcaption': {
      fontFamily: `${
        theme('gutenberg.figCaption.fontFamily').map(font => font)
        }`,
      fontSize: theme('gutenberg.figCaption.fontSize'),
    },
    '.alignfull, .alignwide': {
      'figcaption': {
        paddingTop: theme('gutenberg.columnGap'),
        paddingBottom: 0,
        textAlign: theme('gutenberg.figCaption.align.wide'),
      },
    },
    '.alignleft': {
      'figcaption': {
        textAlign: theme('gutenberg.figCaption.align.left'),
        padding: `
          ${theme('gutenberg.columnGap')}
          ${theme('gutenberg.rowGap.default')}
          ${theme('gutenberg.columnGap')}
          0
        `,
      },
    },
    '.aligncenter': {
      'figcaption': {
        textAlign: theme('gutenberg.figCaption.align.left'),
        padding: `
          ${theme('gutenberg.columnGap')}
          ${theme('gutenberg.rowGap.default')}
          ${theme('gutenberg.columnGap')}
          0
        `,
      },
    },
    '.alignright': {
      'figcaption': {
        textAlign: theme('gutenberg.figCaption.align.right'),
        padding: `
          ${theme('gutenberg.columnGap')}
          ${theme('gutenberg.rowGap.default')}
          ${theme('gutenberg.columnGap')}
          0
        `,
      },
    },
  }
  addComponents([figCaption])
}
