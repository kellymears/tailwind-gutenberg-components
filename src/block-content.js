/**
 * Block Content
 */
module.exports = ({ addComponents, theme }) => {
  const { blockContent, screens, spacing, wrapper } = theme('gutenberg')

  const block = {
    [`${wrapper.selector}`]: {
      '> *': {
        marginTop: spacing.vertical.default,
        marginBottom: spacing.vertical.default,

        '&:not(.alignwide):not(.alignfull)': {
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: blockContent.maxWidth.xl,

          [`@media (max-width: ${screens.xs})`]: {
            maxWidth: blockContent.maxWidth.xs.normal,
          },

          [`@media (min-width: ${screens.sm})`]: {
            maxWidth: blockContent.maxWidth.sm.normal,
          },

          [`@media (min-width: ${screens.md})`]: {
            maxWidth: blockContent.maxWidth.md.normal,
          },

          [`@media (min-width: ${screens.lg})`]: {
            maxWidth: blockContent.maxWidth.lg.normal,
          },

          [`@media (min-width: ${screens.xl})`]: {
            maxWidth: blockContent.maxWidth.xl.normal,
          },
        },

        '&.alignfull': {
          marginTop: spacing.vertical.full,
          marginBottom: spacing.vertical.full,

          [`@media (max-width: ${screens.xs})`]: {
            maxWidth: blockContent.maxWidth.xs.full,
          },

          [`@media (min-width: ${screens.sm})`]: {
            maxWidth: blockContent.maxWidth.sm.full,
          },

          [`@media (min-width: ${screens.md})`]: {
            maxWidth: blockContent.maxWidth.md.full,
          },

          [`@media (min-width: ${screens.lg})`]: {
            maxWidth: blockContent.maxWidth.lg.full,
          },

          [`@media (min-width: ${screens.xl})`]: {
            maxWidth: blockContent.maxWidth.xl.full,
          },
        },

        '&.alignwide': {
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: spacing.vertical.wide,
          marginBottom: spacing.vertical.wide,

          [`@media (max-width: ${screens.xs})`]: {
            maxWidth: blockContent.maxWidth.xs.wide,
          },

          [`@media (min-width: ${screens.sm})`]: {
            maxWidth: blockContent.maxWidth.sm.wide,
          },

          [`@media (min-width: ${screens.md})`]: {
            maxWidth: blockContent.maxWidth.md.wide,
          },

          [`@media (min-width: ${screens.lg})`]: {
            maxWidth: blockContent.maxWidth.lg.wide,
          },

          [`@media (min-width: ${screens.xl})`]: {
            maxWidth: blockContent.maxWidth.xl.wide,
          },
        },
      },
    },
  }

  addComponents(block)
}
