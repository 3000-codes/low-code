import React from 'react'
import { WidgetMap } from './index'
import { ComponentInfo } from '@/typing'
const DragableWidget:React.FC<ComponentInfo> = (props) => {
  const { widget, id, props: widgetProps } = props
  const { style } = widgetProps
  const Widget = WidgetMap.get(widget.name)!
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('widgetId', id)
  }
  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={style}
      className="absolute w60px h60px"
    >
      <Widget {...widgetProps} />
    </div>
  )
}

export default DragableWidget
