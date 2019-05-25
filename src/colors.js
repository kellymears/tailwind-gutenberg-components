// packages
const _ = require('lodash')
const chroma = require('chroma-js')

// helpers
const generateOpacities = () => {
  let opacityIteration = 1,
      opacities = [0]

  while (opacityIteration < 10) {
    opacities.push(`${opacityIteration}0`)
    opacityIteration++
  }

  return opacities
}

const baseColor = (color) => {
  return chroma(color).alpha(0.5).hex('rgba')
}

const mixColor = (color, opacity) => {
  chroma(color).alpha(opacity / 10).hex('rgba')
}

// exports
module.exports = ({addComponents, theme}) => {
  const options = theme('gutenberg.colors')
  const opacities = generateOpacities()

  const colors = _.map(options, (value, name) => ({
    '.wp-blocks' : {
      [`.has-${name}-color`]: {
        color: value,
      },
      [`.has-${name}-background-color.has-background-dim`]: {
        backgroundColor: baseColor(value),
        zIndex: 10,
      },
    },
  }))

  const backgroundShades = _.map(options, (color, name) => {
    opacities.map(opacity => ({
      '.wp-blocks': {
        [`.has-${name}-background-color.has-background-dim-${opacity}`]: {
          backgroundColor: mixColor(color, opacity),
          zIndex: 10,
        },
      },
    }))
  })

  addComponents([
    colors,
    backgroundShades,
  ])
}
