module.exports = ({ addComponents, theme }) => {
  const options = theme('gutenberg')

  const blockContainer = {
    '.wp-blocks > *:not(.alignwide):not(.alignfull)': {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: options.contentWidths.xl,
      paddingLeft: options.columnGap,
      paddingRight: options.columnGap,

      [`@media (max-width: ${options.screens.xs})`]: {
        maxWidth: options.contentWidths.xs.normal,
      },

      [`@media (min-width: ${options.screens.sm})`]: {
        maxWidth: options.contentWidths.sm.normal,
      },

      [`@media (min-width: ${options.screens.md})`]: {
        maxWidth: options.contentWidths.md.normal,
      },

      [`@media (min-width: ${options.screens.lg})`]: {
        maxWidth: options.contentWidths.lg.normal,
      },

      [`@media (min-width: ${options.screens.xl})`]: {
        maxWidth: options.contentWidths.xl.normal,
      },
    },

    '.wp-blocks > *': {
      marginTop: options.rowGap.default,
      marginBottom: options.rowGap.default,
    },

    '.wp-blocks > .alignfull': {
      marginTop: options.rowGap.full,
      marginBottom: options.rowGap.full,

      [`@media (max-width: ${options.screens.xs})`]: {
        maxWidth: options.contentWidths.xs.full,
      },

      [`@media (min-width: ${options.screens.sm})`]: {
        maxWidth: options.contentWidths.sm.full,
      },

      [`@media (min-width: ${options.screens.md})`]: {
        maxWidth: options.contentWidths.md.full,
      },

      [`@media (min-width: ${options.screens.lg})`]: {
        maxWidth: options.contentWidths.lg.full,
      },

      [`@media (min-width: ${options.screens.xl})`]: {
        maxWidth: options.contentWidths.xl.full,
      },
    },

    '.wp-blocks > .alignwide': {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: options.rowGap.wide,
      marginBottom: options.rowGap.wide,

      [`@media (max-width: ${options.screens.xs})`]: {
        maxWidth: options.contentWidths.xs.wide,
      },

      [`@media (min-width: ${options.screens.sm})`]: {
        maxWidth: options.contentWidths.sm.wide,
      },

      [`@media (min-width: ${options.screens.md})`]: {
        maxWidth: options.contentWidths.md.wide,
      },

      [`@media (min-width: ${options.screens.lg})`]: {
        maxWidth: options.contentWidths.lg.wide,
      },

      [`@media (min-width: ${options.screens.xl})`]: {
        maxWidth: options.contentWidths.xl.wide,
      },
    },
  }

  addComponents(blockContainer)
}
