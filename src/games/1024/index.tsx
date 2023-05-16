import { useState, useEffect } from 'react'
const OneZeroTwoFour = () => {
  type Cell = null | number
  const [grid, setGrid] = useState<Cell[][]>(Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => null)))
  let [score, setScore] = useState(0)

  const restart = () => {
    setScore(0)
    setGrid(Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => null)))
  }

  const checkGameOver = () => {
    // 检查是否有空单元格
    const emptyCells: [number, number][] = []
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (!cell) {
          emptyCells.push([rowIndex, colIndex]) // 记录空单元格的坐标
        }
      })
    })
    if (emptyCells.length > 0) { // 有空单元格，游戏未结束
      return false
    }
    // 检查是否有相邻的单元格相等
    for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
      for (let colIndex = 0; colIndex < 4; colIndex++) {
        if (rowIndex < 3 && grid[rowIndex][colIndex] === grid[rowIndex + 1][colIndex]) {
          return false
        }
        if (colIndex < 3 && grid[rowIndex][colIndex] === grid[rowIndex][colIndex + 1]) {
          return false
        }
      }
    }
    return true
  }

  const addNumber = () => {
    const emptyCells: [number, number][] = []
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (!cell) {
          emptyCells.push([rowIndex, colIndex]) // 记录空单元格的坐标
        }
      })
    })
    if (emptyCells.length === 0) { // 没有空单元格了
      return
    }
    // 随机取1个空单元格
    const randomIndex1 = Math.floor(Math.random() * emptyCells.length)
    const [rowIndex, colIndex] = emptyCells[randomIndex1]
    const newGrid = [...grid]
    newGrid[rowIndex][colIndex] = Math.random() > 0.1 ? 2 : 4 // 90%概率生成2，10%概率生成4
    setGrid(newGrid)
  }

  // FIXME: 未沉底合并
  const leftMove = () => {
    const newGrid = [...grid]

    newGrid.forEach((row) => {
      // 从左向右合并
      for (let colIndex = 0; colIndex <= 2; colIndex++) {
        if (row[colIndex]) {
          if (row[colIndex] === row[colIndex + 1]) {
            row[colIndex]! *= 2
            row[colIndex + 1] = null
            score += row[colIndex]!
          }
        }
      }
      // 从右向左移动
      for (let colIndex = 0; colIndex <= 2; colIndex++) {
        if (!row[colIndex]) {
          row[colIndex] = row[colIndex + 1]
          row[colIndex + 1] = null
        }
      }
    })
    setGrid(newGrid) // 更新网格
    setScore(score) // 更新分数
  }

  const rightMove = () => {
    const newGrid = [...grid]
    newGrid.forEach((row) => {
      // 从右向左合并
      for (let colIndex = 3; colIndex >= 1; colIndex--) {
        if (row[colIndex]) {
          if (row[colIndex] === row[colIndex - 1]) {
            row[colIndex]! *= 2
            row[colIndex - 1] = null
            score += row[colIndex]!
          }
        }
      }
      // 从左向右移动
      for (let colIndex = 3; colIndex >= 1; colIndex--) {
        if (!row[colIndex]) {
          row[colIndex] = row[colIndex - 1]
          row[colIndex - 1] = null
        }
      }
    })
    setGrid(newGrid) // 更新网格
    setScore(score) // 更新分数
  }

  const upMove = () => {
    const newGrid = [...grid]
    for (let colIndex = 0; colIndex < 4; colIndex++) {
      // 从上向下合并
      for (let rowIndex = 0; rowIndex <= 2; rowIndex++) {
        if (newGrid[rowIndex][colIndex]) {
          if (newGrid[rowIndex][colIndex] === newGrid[rowIndex + 1][colIndex]) {
            newGrid[rowIndex][colIndex]! *= 2
            newGrid[rowIndex + 1][colIndex] = null
            score += newGrid[rowIndex][colIndex]!
          }
        }
      }
      // 从下向上移动
      for (let rowIndex = 0; rowIndex <= 2; rowIndex++) {
        if (!newGrid[rowIndex][colIndex]) {
          newGrid[rowIndex][colIndex] = newGrid[rowIndex + 1][colIndex]
          newGrid[rowIndex + 1][colIndex] = null
        }
      }
    }
    setGrid(newGrid) // 更新网格
    setScore(10086) // 更新分数
  }
  const downMove = () => {
    const newGrid = [...grid]
    for (let colIndex = 0; colIndex < 4; colIndex++) {
      // 从下向上合并
      for (let rowIndex = 3; rowIndex >= 1; rowIndex--) {
        if (newGrid[rowIndex][colIndex]) {
          if (newGrid[rowIndex][colIndex] === newGrid[rowIndex - 1][colIndex]) {
            newGrid[rowIndex][colIndex]! *= 2 // 合并
            newGrid[rowIndex - 1][colIndex] = null // 清空
            score += newGrid[rowIndex][colIndex]!
          }
        }
      }
      // 从上向下移动
      for (let rowIndex = 3; rowIndex >= 1; rowIndex--) {
        if (!newGrid[rowIndex][colIndex]) {
          newGrid[rowIndex][colIndex] = newGrid[rowIndex - 1][colIndex]
          newGrid[rowIndex - 1][colIndex] = null
        }
      }
    }
    setGrid(newGrid) // 更新网格
    setScore(score) // 更新分数
  }

  useEffect(() => {
    // 开始游戏时，生成两个数字
    addNumber()
    addNumber()

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowLeft':
          leftMove()
          break
        case 'ArrowRight':
          rightMove()
          break
        case 'ArrowUp':
          upMove()
          break
        case 'ArrowDown':
          downMove()
          break
      }
      if (checkGameOver()) {
        alert('游戏结束')
        return
      }
      addNumber()
    }

    window.addEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
    <div className='flex'>
      <button onClick={restart}>restart</button>
      <div>score: {score}</div>
      <button onClick={addNumber}>addNumber</button>
    </div>
       {/* 4*4 的网格 */}
    <div className="w100% h100% flex flex-col items-center justify-center">
      {grid.map((row, rowIndex) => (
        <div className="flex" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div className="w100px h100px border border-solid border-gray-500 flex items-center justify-center" key={colIndex}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
    </>

  )
}

export default OneZeroTwoFour
