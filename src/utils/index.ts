const parseNumber = (value: any) => {
  if (typeof value === 'number') {
    return value
  }
  if (typeof value === 'string') {
    return parseInt(value)
  }
  return 0
}

const uuid = () => {
  if (crypto?.randomUUID) {
    return crypto.randomUUID()
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0 // 随机数取整（0-15）
    const v = c === 'x' ? r : (r & 0x3) | 0x8 // 如果是x，取0-15的随机数，如果是y，取0-3的随机数和8进行或运算
    return v.toString(16) // 转换成16进制
  })
}

export { parseNumber, uuid }
