# Tailwind/Gutenberg

> A Tailwind plugin for WordPress theme developers.

⚠️ Achtung! Work-in-progress! PRs welcome. All one or none! Long life and eternal happiness. Wash with Doc Bronners, 18 uses, three times daily! In all we do let us be generous with our commits!

## Current modules

- `aspect-ratios.js`
- `block-content.js`
- `block-cover.js`
- `block-embed.js`
- `block-image.js`
- `block-table.js`
- `block-video.js`
- `colors.js`
- `columns.js`
- `figcaption.js`
- `group.js`
- `typography.js`

## Contributing

Honestly, thanks! This thing cannot succeed without community support and contributions. 🍻

`Tailwind/Gutenberg` is broken into modules to the extent that it can be so as to not  wastefully generate classes which aren't utilized.

If submitting a PR:

### Do not utilize default theme() keys in your module code

In your module avoid utilizing theme configuration values outside of the `theme.gutenberg` key.

**Example:**

```js
  // 🚫 Bad
  const cover = ({
    '.wp-block-cover': {
      paddingTop: theme('spacing.2xl'),
    }
  })

  // 🤟🏽 Good
  const options = theme('gutenberg.blocks.cover')
  const cover = ({
    '.wp-block-cover': {
      paddingTop: theme('gutenberg.spacing.vertical.default'),
    }
  })
}
```

The one exception to utilizing `theme()` is when providing default values in `tailwind.config.js`, and in that case you should absolutely use it and stick to keys found in the stock tailwind config file.

### Do not hardcode property values

Try not to set values directly. Try to source everything from the configuration file.

**Example:**

```js
  // 🚫 Bad
  const cover = ({
    '.wp-block-cover': {
      paddingTop: '2rem',
    }
  })

  // 🤟🏽 Good
  const options = theme('gutenberg.blocks.cover')
  const cover = ({
    '.wp-block-cover': {
      paddingTop: options.verticalPadding,
    }
  })
}
```

## Thanks!