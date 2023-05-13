function createCanvas (width?:number, height?:number) {
  const canvas = document.createElement('canvas')
  canvas.width = width ?? document.documentElement.clientWidth // pad:980 pc:1280
  canvas.height = height ?? document.documentElement.clientHeight // pad: 560 pc: 720
  return canvas
}

export { createCanvas }
