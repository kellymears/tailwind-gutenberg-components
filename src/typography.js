const _ = require('lodash')

module.exports = ({ addComponents, theme }) => {
  /**
   * Tailwind Config Options
   */
  const familyOpts = theme('gutenberg.fontFamily')
  const sizeOpts = _.omit(theme('gutenberg.fontSizes'), 'wpGenerated')
  const generatedSizeOpts = theme('gutenberg.fontSizes.wpGenerated')

  /**
   * Font Families
   */
  const fonts = _.map(familyOpts, (value, key) => ({
    [`.wp-blocks ${key}:not([class^="font-"])`]: {
      fontFamily: `${value.map(font => (` ${font}`))}`,
    },
  }))

  /**
   * Font Sizes
   */
  const sizes = _.map(sizeOpts, (value, key) => ({
    [`.wp-blocks ${key}:not([class^="font-"])`]: {
      fontSize: value,
    },
  }))

  /**
   * WordPress Generated Font Sizes
   */
  const generatedFontSizes = _.map(generatedSizeOpts, (value, key) => ({
    [`.wp-blocks .has-${key}-font-size`]: {
      fontSize: value,
    },
  }))

  /**
   * List styles
   */
  const listStyles = {
    '.wp-blocks': {
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

      [`ol:not([class^="wp-block-"]) li,
        ol:not([class^="wp-block-"]) li *,
        ul:not([class^="wp-block-"]) li,
        ul:not([class^="wp-block-"]) li *`]: {
        paddingLeft: theme('gutenberg.lists.inset'),
      },
    },
  }

  addComponents([
    fonts,
    sizes,
    generatedFontSizes,
    listStyles,
  ])
}
