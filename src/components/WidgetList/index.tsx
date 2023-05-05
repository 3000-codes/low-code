import React from 'react'
import Widgets from '../widgets'
import './index.scss'

const WidgetList = () => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {}
  return (
    <div className="widget-list" onDragStart={handleDragStart}>
      {Widgets.map((item, index) => (
        <div key={index} draggable className="widget-list__item">
          <span className={'iconfont icon-' + item.icon}></span>
          </div>
      ))}
    </div>
  )
}

export default WidgetList
