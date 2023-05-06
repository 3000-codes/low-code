import React from 'react'
import Widgets from '../widgets'
import './index.scss'

const WidgetList = () => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    const widgetName = target.dataset.widgetName
    if (!widgetName) return
    e.dataTransfer.setData('widgetName', widgetName)
  }
  return (
    <div className="widget-list h65% p10px grid gap-x-19px gap-y-10px grid-cols-[repeat(auto-fill,80px)] grid-rows-[repeat(auto-fill,40px)]" onDragStart={handleDragStart}>
      {Widgets.map(item => (
        <div key={item.name} draggable data-widget-name={item.name} className="widget-list__item w80px h40px b b-solid b-#ddd cursor-grab text-center color-#333 py2 px5 flex items-center justify-center active:cursor-grabbing">
          <span className={'m-r-4px text-20px iconfont  icon-' + item.icon}></span>
          </div>
      ))}
    </div>
  )
}

export default WidgetList
