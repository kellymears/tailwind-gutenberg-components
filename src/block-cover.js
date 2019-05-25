module.exports = ({ addComponents, theme }) => {
  const options = theme('gutenberg.blocks.cover')

  const cover = ({
    '.wp-blocks .wp-block-cover': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      backgroundSize: 'cover',
      paddingTop: 0,
      paddingBottom: 0,

      '.wp-block-cover__inner-container': {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        paddingTop: options.verticalPadding,
        paddingBottom: options.verticalPadding,
        backgroundColor: 'inherit',
        color: theme('colors').white.default,

        '*': {
          position: 'relative',
          zIndex: theme('zIndex')['20'],
        },

        [`p, p a`]: {
          color: theme('colors').white.default,
          fontSize: theme('fontSize')['3xl'],
        },
      },

      '.wp-block-cover__inner-container:before': {
        content: `''`,
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'inherit',
        zIndex: theme('zIndex')['10'],
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
