/**
 * Grid
 */
const constructGridObject = () => {
  var gridTemplate = []
  var gridIteration = 2

  while (gridIteration < 13) {
    gridTemplate.push({
      'count': gridIteration,
      'selector': `&.has-${gridIteration}-columns`,
    })

    gridIteration++
  }

  return gridTemplate
}

module.exports = ({ addComponents, theme }) => {
  const options = theme('gutenberg')
  const colGap = options.spacing.horizontal

  const gridTemplate = constructGridObject()

  const columns = gridTemplate.map(obj => ({
    [`div:not(.wp-block-group)`]: {
      '.wp-block-columns, .is-grid': {
        paddingLeft: colGap,
        paddingRight: colGap,

        /**
         * Prefer grid for supporting browsers.
         */
        '@supports (display: grid)': {
          [obj.selector]: {
            display: 'grid',
            [`@media (min-width: ${options.screens.md})`]: {
              'grid-template-columns': `repeat(${obj.count}, minmax(0, 1fr))`,
            },
            'grid-column-gap': colGap,
          },
        },

        /**
         * Fallback to flex.
         */
        '@supports not (display: grid)': {
          [obj.selector]: {
            display: 'flex',
            flexWrap: 'no-wrap',
            '> .wp-block-column': {
              flex: 1,
            },
          },
        },
      },
    },
  }))

  addComponents([
    columns,
  ])
}
