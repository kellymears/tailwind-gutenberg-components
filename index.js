/**
 * Tailwind/Gutenberg
 * @link https://git.io/Jv6Oz
 */
module.exports = {
  /**
   * Default config
   */
  defaultConfig: require('./src/default.config'),

  /**
   * Block contents
   *
   * Required config keys:
   *  - contentWidths
   *  - rowGap
   *  - screens
   */
  blockContent: require('./src/block-content'),

  /**
   * Typographic settings
   *
   * Required config keys:
   *  - fontFamily
   *  - fontSizes
   *  - fontSizes.generated
   */
  typography: require('./src/typography'),

  /**
   * Base color settings
   *
   * Required config keys:
   *  - gutenberg.colors
   */
  colors: require('./src/colors'),

  /**
   * core/embed
   *
   * Required config keys:
   *  - @todo
   */
  aspectRatios: require('./src/aspect-ratios'),

  /**
   * core/group
   * core/columns
   * core/column
   */
  columns: require('./src/columns'),
  group: require('./src/group'),

  /**
   * Figcaptions
   */
  figcaption: require('./src/figcaption'),

  /**
   * core/embed
   */
  blockEmbed: require('./src/block-embed'),

  /**
   * core/image
   */
  image: require('./src/block-image'),

  /**
   * core/video
   */
  video: require('./src/block-video'),

  /**
   * core/cover
   */
  cover: require('./src/block-cover'),

  /**
   * core/table
   */
  table: require('./src/block-table'),
}