import { useEffect, useState, useRef } from 'react'

function MasterBall () {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [, setCtx] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas?.getContext('2d')
    if (!ctx) return
    setCtx(ctx)
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    // 画正方形
    ctx.fillStyle = '#BC13FE'
    ctx.fillRect(125, 125, 250, 250)

    // 画圆
    ctx.beginPath()
    ctx.arc(250, 250, 125, 0, 2 * Math.PI)
    ctx.fillStyle = '#FFFFFF'
    ctx.fill()
    ctx.closePath()

    // 画M字母
    ctx.beginPath()
    ctx.moveTo(200, 160)
    ctx.lineTo(200, 325)
    ctx.lineTo(300, 260)
    ctx.lineTo(325, 260)
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 25
    ctx.stroke()
    ctx.closePath()
  }, [])

  return (
    <canvas id="canvas" ref={canvasRef} width={5000} height={5000} ></canvas>
  )
}

export default MasterBall
