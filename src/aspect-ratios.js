const percent = (width, height) => {
  return ((height/width)*100)
}

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

  const base = {
    '.wp-block-embed__wrapper': {
      position: 'relative',
    },
    '.wp-block-embed__wrapper::before': {
      display: 'block',
      content: `''`,
    },
  }

  const aspectRatios = ratios.forEach(ratio => ({
    [`.wp-embed-aspect-${ratio[0]}-${ratio[1]}`]: {
      '.wp-block-embed__wrapper::before': {
        paddingTop: percent(ratio[0], ratio[1]) + '%',
      },
    },
  }))

  addComponents([
    base,
    aspectRatios,
  ])
}
