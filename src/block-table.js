/**
 * core/table
 */
module.exports = ({ addComponents, theme }) => {
  const options = theme('gutenberg')

  const table = ({
    '.wp-block-table': {
      borderCollapse: 'collapse',
      overflowX: 'auto',
      width: '100%',

      thead: {
        fontWeight: options.blocks.table.head.fontWeight,
      },

      tfoot: {
        borderTop: `3px solid`,
      },

      [`td, th`]: {
        borderColor: options.blocks.table.cell.borderColor,
        borderWidth: options.blocks.table.cell.borderWidth,
        padding: options.blocks.table.cell.padding,
      },

      '&:not(.table-layout-fixed)': {
        tableLayout: 'auto',
      },
    },
  })

  const fixedLayout = ({
    '.has-fixed-layout': {
      tableLayout: 'fixed',
      width: '100%',

      ['td, th']: {
        wordBreak: 'break-word',
      },
    },
  })

  const striped = ({
    '.is-style-stripes tr:nth-child(odd)': {
      backgroundColor: options.blocks.table.stripes.color,
    },
  })

  addComponents([
    table,
    options.styles.stripes ? striped : null,
    options.supports.fixedLayout ? fixedLayout : null,
  ])
}
