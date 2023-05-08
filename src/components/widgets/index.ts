import React from 'react'
import Circle, { defaultProps as CircleProps } from './Circle'
import Rectangle, { defaultProps as RectangleProps } from './Rectangle'
import { WidgetInfo } from '@/typing'

const Widgets: WidgetInfo[] = [
  {
    name: 'Circle',
    label: '圆形',
    info: CircleProps,
    icon: '24gl-circle'
  },
  {
    name: 'Rectangle',
    label: '矩形',
    info: RectangleProps,
    icon: 'juxing'
  }
]
const WidgetMap = new Map<string, React.FC<any>>()

WidgetMap.set('Circle', Circle)
WidgetMap.set('Rectangle', Rectangle)

export default Widgets
export { WidgetMap }
