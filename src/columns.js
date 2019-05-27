const _ = require('lodash')

const constructGridObject = () => {
  var gridTemplate = []
  var gridIteration = 2

  while (gridIteration < 13) {
    gridTemplate.push({
      'count': gridIteration,
      'selector': `&.has-${gridIteration}-columns`,
    }) && gridIteration++
  }

  return gridTemplate
}

module.exports = ({ addComponents, theme }) => {

  const screens = theme('gutenberg.screens')
  const colGap = theme('gutenberg.columnGap')
  const gridTemplate = constructGridObject()

  const columns = gridTemplate.map(obj => ({
    ':not(.wp-block-group)': {
      '.wp-block-columns, .is-grid': {
        paddingLeft: colGap,
        paddingRight: colGap,

        // you're the new grid
        '@supports (display: grid)': {
          [obj.selector]: {
            display: 'grid',
            [`@media (min-width: ${screens.md})`]: {
              'grid-template-columns': `repeat(${obj.count}, 1fr)`,
            },
            'grid-column-gap': colGap,
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
    },
  }))

  const group = {
    '.wp-block-group': {
      marginTop: 0,
      marginBottom: 0,
      paddingTop: theme('gutenberg.rowGap'),
      paddingBottom: theme('gutenberg.rowGap'),
      '.wp-block-columns': {
        display: 'flex',
      },
    },
  }

  addComponents([
    columns,
    group,
  ])
}
