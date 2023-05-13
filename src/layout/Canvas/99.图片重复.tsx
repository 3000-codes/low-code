import { useEffect, useRef } from 'react'
import canvasCreatepattern from './images/canvas_createpattern.png'
import { createCanvas } from './tools'

function myCanvas (width:number, height:number) {
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const img = new Image()
  img.src = canvasCreatepattern
  // Only use the image after it's loaded
  img.onload = () => {
    const pattern = ctx.createPattern(img, 'repeat-x')! // 通过 repetition 参数在指定的方向上重复元图像 和bacckground-repeat一样
    ctx.fillStyle = pattern
    ctx.fillRect(0, 0, 300, 300)
  }
  return canvas
}

function CanvasDemo () {
  const containRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const contain = containRef.current
    if (!contain) return
    const width = document.documentElement.clientWidth
    const height = document.documentElement.clientHeight
    contain.appendChild(myCanvas(width, height)!)
  }, [])
  return (
    <div ref={containRef}></div>
  )
}

export default CanvasDemo
