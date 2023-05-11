import { useEffect, useRef } from 'react'

export function Smile (width:number, height:number) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // 绘制笑脸
  // 大圆
  ctx.arc(300, 200, 100, 0, 2 * Math.PI, false)
  ctx.stroke()

  // 左眼
  ctx.beginPath() // 开始新的路径,否则会和上面的路径连接
  ctx.arc(250, 150, 20, 0, 2 * Math.PI, false)
  ctx.stroke()
  ctx.fill() // 填充
  ctx.closePath() // 关闭路径,与beginPath对应

  // 右眼
  ctx.beginPath()
  ctx.arc(350, 150, 20, 0, 2 * Math.PI, false)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // 鼻子
  ctx.beginPath()
  ctx.arc(300, 200, 20, 0, 2 * Math.PI, false)
  ctx.stroke()
  ctx.closePath()

  // 嘴巴
  ctx.beginPath()
  ctx.arc(300, 200, 80, 0, Math.PI, false)
  ctx.stroke()
  ctx.closePath()

  return canvas
}

function myCanvas (width:number, height:number) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // 绘制笑脸
  // 大圆
  ctx.arc(300, 200, 100, 0, 2 * Math.PI, false)
  ctx.stroke()

  // 左眼
  ctx.beginPath() // 开始新的路径,否则会和上面的路径连接
  ctx.arc(250, 150, 20, 0, 2 * Math.PI, false)
  ctx.stroke()
  ctx.fill() // 填充
  ctx.closePath() // 关闭路径,与beginPath对应

  // 右眼
  ctx.beginPath()
  ctx.arc(350, 150, 20, 0, 2 * Math.PI, false)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // 鼻子(椭圆)
  ctx.beginPath()
  ctx.ellipse(300, 200, 20, 20, 0, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.closePath()

  // 嘴巴
  ctx.beginPath()
  ctx.arc(300, 200, 80, 0, Math.PI, false)
  ctx.stroke()
  ctx.closePath()

  return canvas
}

function CanvasDemo () {
  const containRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const contain = containRef.current
    if (!contain) return
    const width = document.documentElement.clientWidth // pad:980 pc:1280
    const height = document.documentElement.clientHeight // pad:544 pc:649
    contain.appendChild(myCanvas(width, height)!)
  }, [])
  return (
    <div ref={containRef} className='b b-soild b-black'></div>
  )
}

export default CanvasDemo
