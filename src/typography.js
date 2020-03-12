const _ = require('lodash')

module.exports = ({ addComponents, theme }) => {
  /**
   * Tailwind Config Options
   */
  const familyConfig = theme('gutenberg.typography.fontFamily')
  const colorConfig = theme('gutenberg.typography.fontColor')
  const sizeConfig = _.omit(theme('gutenberg.typography.fontSize'), 'generated')
  const userScaleConfig = theme('gutenberg.fontSize.userScale')

  /**
   * Font Families
   */
  const fonts = _.map(familyConfig, (value, key) => ({
    [`${key}:not([class^="font-"])`]: {
      fontFamily: `${value.map(font => (` ${font}`))}`,
    },
  }))

  /**
   * Font Sizes
   */
  const sizes = _.map(sizeConfig, (value, key) => ({
    [`${key}:not([class^="font-"])`]: {
      fontSize: value,
    },
  }))

  /**
   * WordPress Generated Font Sizes
   */
  const generatedFontSizes = _.map(userScaleConfig, (value, key) => ({
    [`.has-${key}-font-size`]: {
      fontSize: value,
    },
  }))

  /**
   * Font Colors
   */
  const colors = _.map(colorConfig, (value, key) => ({
    [`${key}:not([class^="has-"])`]: {
      color: value,
    },
  }))

  /**
   * List styles
   */
  const listStyles = {
    [`ol:not([class^="wp-block-"]) li,
      ol:not([class^="wp-block-"]) li *,
      ul:not([class^="wp-block-"]) li,
      ul:not([class^="wp-block-"]) li *`]: {
      paddingLeft: theme('gutenberg.lists.inset'),
    },

    [`ol:not([class^="wp-block-"]),
      ol:not([class^="wp-block-"]) *`]: {
      listStylePosition: 'inside',
      listStyleType: theme('gutenberg.lists.orderedStyle'),
    },

    [`ul:not([class^="wp-block-"]),
      ul:not([class^="wp-block-"]) *`]: {
      listStylePosition: 'inside',
      listStyleType: theme('gutenberg.lists.unorderedStyle'),
    },
  }

  addComponents([
    fonts,
    sizes,
    colors,
    generatedFontSizes,
    listStyles,
  ])
}
