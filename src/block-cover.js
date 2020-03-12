module.exports = ({ addComponents, theme }) => {
  const options = theme('gutenberg.blocks.cover')

  const cover = ({
    '.wp-block-cover': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      backgroundSize: 'cover',
      padding: 0,

      '.wp-block-cover__inner-container': {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        paddingTop: options.verticalPadding,
        paddingBottom: options.verticalPadding,
        backgroundColor: 'inherit',
        zIndex: theme('zIndex')['10'],
        color: theme('colors').white,

        '*': {
          position: 'relative',
          color: theme('colors').white,
          zIndex: theme('zIndex')['20'],
          paddingBottom: options.itemsSpacing,
          textAlign: 'center',
        },
      },

      '&.has-parallax': {
        backgroundAttachment: 'fixed',
        '@supports (-webkit-overflow-scrolling: touch)': {
          backgroundAttachment: 'scroll',
        },
      },
    },
  })

  addComponents([
    cover,
  ])
}
