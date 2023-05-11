import { useEffect, useRef } from 'react'

export const triangle = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 600
  canvas.height = 600
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  // 画直线->三角形
  ctx.moveTo(100, 100) // 起点
  ctx.lineTo(800, 800) // 终点1
  ctx.lineTo(300, 100) // 终点2
  ctx.lineTo(100, 100) // 终点3
  ctx.stroke() // 描边
  return canvas
}
export function lineStyle () {
  const canvas = document.createElement('canvas')
  canvas.width = 600
  canvas.height = 600
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  // 线段样式
  ctx.moveTo(100, 100) // 起点
  ctx.lineTo(800, 800) // 终点1
  // 设置后面的线段的样式，如果后续没有重新设置，就会统一使用这个样式
  ctx.lineWidth = 10
  ctx.strokeStyle = 'red'
  ctx.stroke() // 描边(仅对上面的线段有效，下面的线段需要重新设置)
  ctx.lineTo(300, 100) // 终点2
  ctx.stroke() // 描边
  return canvas
}
export function LinearGradient () {
  const canvas = document.createElement('canvas')
  canvas.width = 600
  canvas.height = 600
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  // 线性渐变
  const gradient = ctx.createLinearGradient(0, 0, 600, 600) // 创建渐变对象
  gradient.addColorStop(0, 'red') // 开始颜色
  gradient.addColorStop(0.5, 'yellow') // 中间颜色
  gradient.addColorStop(1, 'blue') // 结束颜色
  ctx.moveTo(0, 0) // 起点
  ctx.lineTo(600, 600) // 终点2
  ctx.lineWidth = 15
  ctx.strokeStyle = gradient
  ctx.stroke() // 描边
  return canvas
}

export function RadialGradien () {
  const canvas = document.createElement('canvas')
  canvas.width = 600
  canvas.height = 600
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const delta = 0 // 展示效果用
  // 放射渐变(径向渐变) :两个不同位置不同颜色的光源（当然也可以同位置同颜色）
  const gradient = ctx.createRadialGradient(300 - delta, 300 - delta, 0, 300 + delta, 300 + delta, 300) // 创建渐变对象
  gradient.addColorStop(0, 'red') // 开始颜色
  gradient.addColorStop(0.5, 'yellow') // 中间颜色
  gradient.addColorStop(1, 'blue') // 结束颜色

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 600, 600)
  return canvas
}

export function ConicGradient (width:number, height:number) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  // 锥形渐变
  const gradient = ctx.createConicGradient(Math.PI / 4, width / 2, height / 2) // 默认从0开始，顺时针旋转
  gradient.addColorStop(0, 'red') // 开始颜色
  gradient.addColorStop(0.5, 'blue') // 中间颜色
  gradient.addColorStop(1, 'red') // 结束颜色

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)
  return canvas
}

function myCanvas (width:number, height:number) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // 渐变的折线
  ctx.lineWidth = 20
  const gradient = ctx.createLinearGradient(100, 100, 500, 600) // 创建渐变对象
  gradient.addColorStop(0, 'red') // 开始颜色
  gradient.addColorStop(0.25, 'yellow') // 中间颜色
  gradient.addColorStop(0.5, 'green') // 中间颜色
  gradient.addColorStop(1, 'blue') // 结束颜色
  ctx.strokeStyle = gradient

  // 转折点
  ctx.lineCap = 'round' // 线段末端样式:round(圆形)、butt(平头/默认)、square(方头)
  ctx.lineJoin = 'miter' // 线段连接处样式:round(圆形)、bevel(斜角)、miter(尖角)

  ctx.moveTo(100, 200) // 起点
  ctx.lineTo(200, 100)
  ctx.lineTo(300, 50)
  ctx.lineTo(400, 200)
  ctx.lineTo(500, 100)
  ctx.stroke()
  return canvas
}

function CanvasDemo () {
  const containRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const contain = containRef.current
    if (!contain) return
    const width = document.documentElement.clientWidth // 980
    const height = document.documentElement.clientHeight // 544
    contain.appendChild(myCanvas(width, height)!)
  }, [])
  return (
    <div ref={containRef}></div>
  )
}

export default CanvasDemo
