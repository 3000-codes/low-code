class GoBang {
  checkerboard: number[][] = Array.from({ length: 15 }, () => Array.from({ length: 15 }, () => 0))
  chess: number = 1
  isWin: boolean = false
  win: number[][] = []
  constructor () {
    this.init()
  }

  init () {
    this.checkerboard = Array.from({ length: 15 }, () => Array.from({ length: 15 }, () => 0))
    this.chess = 1
    this.isWin = false
    this.win = []
  }

  play (x: number, y: number) {
    if (this.checkerboard[x][y] !== 0) return
    this.checkerboard[x][y] = this.chess
    this.chess = this.chess === 1 ? 2 : 1
    this.checkWin(x, y)
  }

  checkWin (x: number, y: number) {
    const chess = this.checkerboard[x][y] // 当前落子
    const win = this.win // 获胜数组
    const checkerboard = this.checkerboard
    const len = checkerboard.length // 棋盘长度
    const winLen = 5 // 获胜长度
    const winArr: number[][] = [] // 临时获胜数组
    // 横向
    for (let i = 0; i < len; i++) {
      if (checkerboard[x][i] === chess) {
        winArr.push([x, i]) // 将当前落子加入临时获胜数组
      } else {
        winArr.length = 0 // 临时获胜数组清空
      }
      if (winArr.length === winLen) {
        win.push(...winArr)
        this.isWin = true
        return
      }
    }
    // 纵向
    for (let i = 0; i < len; i++) {
      if (checkerboard[i][y] === chess) {
        winArr.push([i, y])
      } else {
        winArr.length = 0
      }
      if (winArr.length === winLen) {
        win.push(...winArr)
        this.isWin = true
        return
      }
    }
    // 左斜
    for (let i = x, j = y; i >= 0 && j >= 0; i--, j--) {
      if (checkerboard[i][j] === chess) {
        winArr.push([i, j])
      } else {
        winArr.length = 0
      }
      if (winArr.length === winLen) {
        win.push(...winArr)
        this.isWin = true
        return
      }
    }
    for (let i = x, j = y; i < len && j < len; i++, j++) {
      if (checkerboard[i][j] === chess) {
        winArr.push([i, j])
      } else {
        winArr.length = 0
      }
      if (winArr.length === winLen) {
        win.push(...winArr)
        this.isWin = true
        return
      }
    }
    // 右斜
    for (let i = x, j = y; i >= 0 && j < len; i--, j++) {
      if (checkerboard[i][j] === chess) {
        winArr.push([i, j])
      } else {
        winArr.length = 0
      }
      if (winArr.length === winLen) {
        win.push(...winArr)
        this.isWin = true
        return
      }
    }
    for (let i = x, j = y; i < len && j >= 0; i++, j--) {
      if (checkerboard[i][j] === chess) {
        winArr.push([i, j])
      } else {
        winArr.length = 0
      }
      if (winArr.length === winLen) {
        win.push(...winArr)
        this.isWin = true
        return
      }
    }
  }
}

export default GoBang
