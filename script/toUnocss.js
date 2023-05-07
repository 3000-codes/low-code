import { transfromCode } from 'transform-to-unocss'

const css = `
  .test {
    color: red;
  }
`

;(async () => {
  console.log(await transfromCode(css))
})()

// console.log(transfromCode(css))
// node ./script/toUnocss.tsnocss.js
