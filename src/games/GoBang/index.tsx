import { useEffect, useRef } from 'react'
import { createCanvas } from '@/layout/Canvas/tools'
import GoBang from './GoBang'
// 五子棋
function myCanvas () {
  const canvas = createCanvas(400, 400)
  canvas.style.border = '1px solid #000'
  canvas.style.background = '#58bc58'
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // 1. 绘制棋盘
  const unit = 25
  for (let i = 1; i < 16; i++) {
    // 横线
    ctx.moveTo(unit, i * unit) // 起点
    ctx.lineTo(375, i * unit) // 终点
    ctx.stroke()

    // 竖线
    ctx.moveTo(i * unit, unit) // 起点
    ctx.lineTo(i * unit, 375) // 终点
    ctx.stroke()
  }

  const goBang = new GoBang()

  // canvas.addEventListener('click', (e) => {
  //   const { offsetX, offsetY } = e
  //   // 获取当前点击的是第几个交叉点的坐标
  //   const x = Math.floor((offsetX + unit / 2) / unit) * unit
  //   const y = Math.floor((offsetY + unit / 2) / unit) * unit
  //   // 边界检测，也可以根据offsetX, offsetY直接判断
  //   if (x < unit || x > 15 * unit || y < unit || y > 15 * unit) return
  //   // 2. 绘制棋子
  //   const [c1, c2] = isBlack ? ['#ccc', '#000'] : ['#666', '#fff']
  //   const delta = isBlack ? -5 : 5
  //   ctx.beginPath()
  //   const g = ctx.createRadialGradient(x + delta, y + delta, 0, x + delta, y + delta, 15)
  //   g.addColorStop(0, c1)
  //   g.addColorStop(1, c2)
  //   ctx.fillStyle = g
  //   ctx.arc(x, y, 10, 0, 2 * Math.PI)
  //   ctx.fill()
  //   // chess[x / unit - 1][y / unit - 1] = isBlack ? 1 : 2
  //   isBlack = !isBlack
  // })

  canvas.addEventListener('click', (e) => {
    if (goBang.isWin) return alert('游戏已结束,请刷新页面重新开始')
    const isBlack = goBang.chess === 1
    const { offsetX, offsetY } = e
    // 四舍五入,计算出当前点击的是第几个交叉点
    const x = Math.round(offsetX / unit)
    const y = Math.round(offsetY / unit)
    if (x < 1 || x > 15 || y < 1 || y > 15) return // 超出棋盘范围
    if (goBang.checkerboard[x - 1][y - 1] !== 0) return // 已经有棋子
    goBang.play(x - 1, y - 1)
    if (goBang.isWin) alert(`${isBlack ? '黑' : '白'}棋赢了`)
    // 3. 绘制棋子
    const [c1, c2] = isBlack ? ['#ccc', '#000'] : ['#666', '#fff']
    const delta = isBlack ? -5 : 5
    ctx.beginPath()
    const g = ctx.createRadialGradient(x * unit + delta, y * unit + delta, 0, x * unit + delta, y * unit + delta, 15)
    g.addColorStop(0, c1)
    g.addColorStop(1, c2)
    ctx.fillStyle = g
    ctx.arc(x * unit, y * unit, 10, 0, 2 * Math.PI)
    ctx.fill()
  })

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
    <div ref={containRef} className='b b-soild b-black w100vw h100vh flex justify-center items-center'></div>
  )
}

export default CanvasDemo
