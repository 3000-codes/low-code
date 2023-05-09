import { CssToTailwindTranslator } from './translator'

const cssCode = `body {
  width: 100%;
  height: 50%;
  margin: 0 !important;
  background-color: transparent;
  border:1px solid #000;
}`

const conversionResult = CssToTailwindTranslator(cssCode)

console.log(conversionResult)
