const _ = require('lodash')

const constructGridObject = () => {
  var gridTemplate = []
  var gridIteration = 2

  while (gridIteration < 13) {
    gridTemplate.push({
      'count': gridIteration,
      'selector': `&.has-${gridIteration}-columns`,
    }) && gridIteration ++
  }

  return gridTemplate
}

module.exports = ({addComponents, theme}) => {

  const screens = theme('screens', {})
  const gridTemplate = constructGridObject()

  const columns = gridTemplate.map(obj => ({
    '.wp-block-columns, .is-grid': {
      paddingLeft: '25px',
      paddingRight: '25px',

      // you're the new grid
      '@supports (display: grid)': {
        [obj.selector]: {
          display: 'grid',
          [`@media (min-width: ${screens.md})`]: {
            'grid-template-columns': `repeat(${obj.count}, 1fr)`,
          },
          'grid-column-gap': '25px',
        },
      },

      // flex is jennifer aniston
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
  }))

  addComponents([
    columns,
  ])
}
