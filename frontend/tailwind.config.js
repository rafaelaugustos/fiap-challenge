const pallete = require("./pallete.js")

module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  corePlugins: {},
  theme: {
    extend: {
      colors: pallete
    },
  },
}