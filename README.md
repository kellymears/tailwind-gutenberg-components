# Tailwind/Gutenberg

> A Tailwind plugin for WordPress theme developers.

⚠️ Achtung! Work-in-progress! PRs welcome. All one or none! Long life and eternal happiness. Wash with Doc Bronners, 18 uses, three times daily! In all we do let us be generous with our commits!

## Current modules

- `aspect-ratios.js`
- `block-cover.js`
- `block-embed.js`
- `block-image.js`
- `colors.js`
- `columns.js`
- `container.js`
- `typography.js`

## Contributing

`Tailwind/Gutenberg` is broken into modules to the extent that it can be so as to not  wastefully generate classes which aren't utilized.

I'll try to build out a better roadmap once I've gotten a bit farther along with the initial work. For now if submitting a PR please try to:

✅ **DO comment**

Note above your module's require statement in `tailwind.config.js` what its general purpose is, what specific top-level classes (if any) it targets or supports, and what configuration keys are required if the module is included. Be as succint as possible and generally try to match the existing format.

**Example:**

```js
/**
  * Supports columnar layouts
  *
  * Supports:
  *  `wp-block-columns`
  *  `wp-block-column`
  *  `wp-block-group`
  *
  * Required config keys:
  *  `gutenberg.screens`
  *  `gutenberg.columnGap`
  */
```

If you feel that a configuration option you've added requires explanation then leave a comment above your `theme.gutenberg` configurable.

**Example:**

```js
/**
 * Keys for `gutenberg.images.figCaption.textAlign`
 * map to the alignment of the containing block
 */
images: {
  figCaption: {
    textAlign: {
      left:   'left',
      right:  'right',
      center: 'center',
      wide:   'center',
    },
    fontFamily: theme('fontFamily.sans'),
  },
},
```

### 🚫 **Do not utilize theme() in your module code**

In your module avoid utilizing theme configuration values outside of the `theme.gutenberg` key.

### 🚫 **Do not assume config**

Avoid otherwise making assumptions about the user's tailwind configuration. The one exception is providing default values in  `tailwind.config.js`, and you should try to make sure that you use sane tailwind defaults.

### 🚫 **Do not hardcode opinionated values**

I am still refactoring some of the hardcoded stuff out of my early scaffolding but all future work should utilize values from `theme.gutenberg`. If you feel that a configuration value is necessitated then you should make it, but it is obviously preferred to reuse existing config keys when appropriate.
