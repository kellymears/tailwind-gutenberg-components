module.exports = ({ addComponents, theme }) => {
  const options = theme('gutenberg.spacing');

  const group = {
    '.wp-block-group': {
      marginTop: 0,
      marginBottom: 0,
      paddingTop: options.vertical.default,
      paddingBottom: options.vertical.default,
      '.wp-block-columns': {
        display: 'flex',
      },
    },
  }

  addComponents([
    group,
  ])
}
