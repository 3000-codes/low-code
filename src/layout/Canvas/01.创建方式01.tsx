import { useEffect, useRef } from 'react'
function CanvasDemo () {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current // 画布
    if (!canvas) return
    const ctx = canvas.getContext('2d') // 画笔
    if (!ctx) return
    ctx.fillStyle = 'red' // 填充颜色
    ctx.fillRect(30, 30, 100, 100) // 填充矩形
    ctx.strokeStyle = 'blue' // 描边颜色
  }, [])
  return (
       <canvas ref={canvasRef} width={600} height={600}>
        {/* canvas 标签的宽高需要通过属性设置，不然会出现问题 */}
       </canvas>
  )
}

export default CanvasDemo
