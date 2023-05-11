import { useRef, useState } from 'react'
const canvasRef = useRef<HTMLCanvasElement>(null)
const [, setCtx] = useState<CanvasRenderingContext2D>()
export default function () {
  const GameCanvas = canvasRef.current as HTMLCanvasElement
  if (!GameCanvas) return
  const ctx = GameCanvas.getContext('2d')
  if (!ctx) return
  setCtx(ctx)
  ctx.fillRect(0, 0, 600, 600)
  // 绘制一个球
  // 监听键盘的上下左右键,移动球

  // 绘制一个球
  const ball = {
    x: 100,
    y: 100,
    radius: 50,
    color: 'red',
    draw: function () {
      ctx.save()
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.stroke()
      ctx.closePath()
      ctx.restore()
    },
    move (direction: 'left' | 'right' | 'up' | 'down') {
      const speed = 10
      const motionMap = new Map(
        [
          ['left', () => {
            this.x -= speed
          }],
          ['right', () => {
            this.x += speed
          }],
          ['up', () => {
            this.y -= speed
          }
          ],
          ['down', () => {
            this.y += speed
          }
          ]
        ]
      )
      motionMap.get(direction)?.()
    },
    clear () {
      ctx.clearRect(0, 0, 600, 600)
    },
    update () {
      this.clear()
      this.draw()
    }
  }
  // ball.draw()
  // 监听键盘的上下左右键,移动球
  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        ball.move('left')
        break
      case 'ArrowRight':
        ball.move('right')
        break
      case 'ArrowUp':
        ball.move('up')
        break
      case 'ArrowDown':
        ball.move('down')
        break
    }
    ball.update()
  })
}
