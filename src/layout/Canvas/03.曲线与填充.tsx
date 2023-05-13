import { useEffect, useRef } from 'react'
import { createCanvas } from './tools'

export function Smile (width:number, height:number) {
  const canvas = createCanvas(width, height)
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

export function Ellipse () {
  const canvas = createCanvas()
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // 绘制椭圆((x-x')^2/radiusX^2 + (y-y')^2/radiusY^2 = 1)
  ctx.beginPath()
  // ctx.ellipse(x', y', radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)
  // x',y':椭圆中心坐标
  // radiusX,radiusY:椭圆长轴和短轴的一半
  // rotation:椭圆旋转角度
  // startAngle,endAngle:椭圆起始角度和结束角度
  // anticlockwise:是否逆时针绘制
  ctx.ellipse(200, 100, 50, 75, 0, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.closePath()
  return canvas
}

// 填充
export function Fill () {
  const canvas = createCanvas()
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // 绘制三角形
  ctx.beginPath()
  ctx.moveTo(50, 50) // 起点
  ctx.lineTo(100, 50) // 第二个点
  ctx.lineTo(100, 100) // 第三个点
  // ctx.lineTo(50, 50) // 第四个点
  // ctx.closePath() // 闭合路径
  ctx.fill() // 填充
  // 调用 closePath，或者 fill都会自动调用 closePath
  ctx.stroke()

  // 绘制半圆
  ctx.beginPath()
  ctx.arc(300, 100, 50, 0, Math.PI, false)
  ctx.fillStyle = 'red' // 填充颜色
  ctx.fill()

  // 圆形
  ctx.beginPath()
  ctx.arc(300, 300, 100, 0, 2 * Math.PI, false)
  const g = ctx.createRadialGradient(250, 250, 0, 250, 250, 50)
  g.addColorStop(0, '#ccc')
  g.addColorStop(1, '#000')
  ctx.fillStyle = g
  ctx.fill()

  return canvas
}

function myCanvas (width:number, height:number) {
  const canvas = createCanvas(width, height)
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
  ctx.ellipse(300, 200, 20, 40, 0, 0, 2 * Math.PI)
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
