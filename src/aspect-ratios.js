const percent = (dividend, divisor) => (dividend / divisor) * 100

module.exports = ({ addComponents }) => {
  const ratios = [
    [21, 9],
    [18, 9],
    [16, 9],
    [4, 3],
    [1, 1],
    [9, 6],
    [1, 2],
  ]

  const wrapper = {
    '.wp-block-embed__wrapper': {
      position: 'relative',

      'iframe': {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
    },
  }

  const aspectRatios = ratios.map(([w, h]) => ({
    [`.wp-embed-aspect-${w}-${h}`]: {
      '.wp-block-embed__wrapper::before': {
        content: `''`,
        display: 'block',
        paddingTop: `${percent(w, h)}%`,
      },
    },
  }))

  addComponents([
    wrapper,
    aspectRatios,
  ])
}
