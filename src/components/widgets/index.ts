import React from 'react'
import Circle, { defaultProps as CircleProps } from './Circle'
import { WidgetInfo } from '@/typing'

const Widgets:WidgetInfo[] = [
  {
    name: 'Circle',
    label: '圆形',
    // component: Circle,
    info: CircleProps,
    icon: '24gl-circle'
  }
]
const WidgetMap = new Map<string, React.ComponentType<any>>()

WidgetMap.set('Circle', Circle)

export default Widgets
export { WidgetMap }
