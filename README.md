# `Tailwind/Gutenberg`

> A Tailwind plugin for WordPress theme developers.

Achtung! This plugin an early WIP and hence it's not on NPM. If you want to see this completed sooner, clone/fork/contribute!

I'm breaking this into modules to the extent that I can and trying to make chunks of it optional so as to not wastefully generate classes which aren't utilized.

I'll try to build out a roadmap once I've gotten a bit farther along with the initial work.

## Current modules

- `gutenberg/base`: Generic container spacing.
- `gutenberg/colors`: Color and background color handling.
- `gutenberg/columns`: Columns block spacing, alignment, layout. Prefers grid layout but gracefully disintegrates to flex.
- `gutenberg/image`: Images, figures, figcaptions.
- `gutenberg/typography`: Fontsizes, families, et al.
- `gutenberg/video`: Embed and video blocks.
- `gutenberg/block-cover`: Cover block spacing, alignments, et al.

## Usage

Drop in the theme configuration values and plugin require statements included in this repo's `tailwind.config.js`. If you've customized your tailwind file you may need to remap values.

## Dependencies

`Tailwind/Gutenberg` uses `chroma-js` to manipulate color values while generating components.
