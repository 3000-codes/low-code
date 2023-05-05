const parseNumber = (value: any) => {
  if (typeof value === 'number') {
    return value
  }
  if (typeof value === 'string') {
    return parseInt(value)
  }
  return 0
}

export { parseNumber }
