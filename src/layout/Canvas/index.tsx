import { useEffect, useRef } from 'react'
import { createCanvas } from './tools'

function myCanvas (width:number, height:number) {
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.fillStyle = 'red'
  ctx.fillRect(0, 0, width, height)
  ctx.fillStyle = 'blue'
  ctx.fillRect(0, 0, width / 2, height / 2)
  ctx.fillStyle = 'green'
  ctx.fillRect(0, 0, width / 4, height / 4)
  ctx.fillStyle = 'yellow'
  ctx.fillRect(0, 0, width / 8, height / 8)
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, width / 16, height / 16)
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, width / 32, height / 32)

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
