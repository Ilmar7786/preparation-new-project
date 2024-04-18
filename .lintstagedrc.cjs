const path = require("path")

module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "npx tsc --noEmit",

  "*.{js,css,ts,tsx,jsx}": [
    "prettier --write",
    "eslint --fix"
  ]
}