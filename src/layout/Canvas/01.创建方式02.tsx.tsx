import { useEffect, useRef } from 'react'
function myCanvas () {
  const canvas = document.createElement('canvas')
  canvas.width = 600
  canvas.height = 600
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.fillStyle = 'red'
  ctx.fillRect(30, 30, 100, 100)
  ctx.strokeStyle = 'blue'
  return canvas
}

function CanvasDemo () {
  const containRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const contain = containRef.current
    if (!contain) return
    contain.appendChild(myCanvas()!)
  }, [])
  return (
    <div ref={containRef}></div>
  )
}

export default CanvasDemo
