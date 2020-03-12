/**
 * Grid
 */
const makeGrid = () => {
  let gridTemplate = [],
      gridIteration = 1

  while (gridIteration < 9) {
    gridTemplate.push({
      'count': gridIteration,
      'width': `${100 / gridIteration}%`,
      'selector': `&.columns-${gridIteration}`,
    })

    gridIteration++
  }

  return gridTemplate
}

module.exports = ({ addComponents, theme }) => {
  const options = theme('gutenberg')
  const gridTemplate = makeGrid()

  const gallery = gridTemplate.map(obj => ({
    ['.wp-block-gallery, .blocks-gallery-grid']: {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      position: 'relative',

      [obj.selector]: {
        '> .blocks-gallery-item': {
          flex: 1,
          minWidth: '100%',
          paddingBottom: `calc(${options.spacing.vertical.default} / 2)`,

          ['figure, figure img']: {
            width: '100%',
          },
        },

        [`@media (min-width: ${options.screens.md})`]: {
          '> .blocks-gallery-item': {
            minWidth: obj.width,
            paddingLeft: `calc(${options.spacing.horizontal} / 2)`,
            paddingRight: `calc(${options.spacing.horizontal} / 2)`,
          },
        },

        ['&.is-cropped figure, &.is-cropped figure img']: {
          objectFit: 'cover',
          height: '100%',
          width: '100%',
        },

        '.is-cropped figure': {
          minHeight: '30vh',
        },
      },
    },
  }))

  addComponents([
    gallery,
  ])
}
