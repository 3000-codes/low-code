import { useState, useRef, MouseEvent as RMouseEvent, DragEvent as RDragEvent, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from './Grid'
import ContextMenu from '../ContextMenu'
import Widgets, { WidgetMap } from '../widgets'
import { addComponent, COMPONENTS_KEY, RootState } from '@/store'
import { uuid } from '@/utils'
import { WidgetName, ComponentInfo } from '@/typing'

const Editor = () => {
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState([0, 0])
  const editorRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const components = useSelector((state:RootState) => state[COMPONENTS_KEY]) as ComponentInfo[]
  const handleContextMenu = (e: RMouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    const { current } = editorRef
    if (!current) return
    // FIXME: 当鼠标在边缘时，菜单展示不完全
    const { left, top } = current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top
    setShowContextMenu(true)
    setContextMenuPosition([x, y])
  }

  const handleDrop = (e: RDragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const widgetName = e.dataTransfer.getData('widgetName') as WidgetName
    const widget = Widgets.find(item => item.name === widgetName)
    if (!widget) return
    // TODO:获取当前鼠标位置，添加组件到store
    const { current } = editorRef
    if (!current) return
    // FIXME: 当鼠标在边缘时，菜单展示不完全
    const { left, top } = current.getBoundingClientRect()
    const x = e.clientX - left - 20
    const y = e.clientY - top - 20
    // TODO:添加组件时，自动选中
    const id = uuid()
    const props = {
      style: {
        left: x,
        top: y
      }
    }
    const component: ComponentInfo = {
      widget,
      id,
      props
    }

    dispatch(addComponent(component))
  }
  const handleDragOver = (e: RDragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy' // 拖拽时鼠标样式,不修改则无法拖拽成功
  }

  return (
    <>
      <div ref={editorRef} className="relative w100% h100%" onContextMenu={handleContextMenu} onDrop={handleDrop} onDragOver={handleDragOver}>
        <Grid />
        <ContextMenu show={showContextMenu} postion={contextMenuPosition} />
        {/* <ul>
          {components.map(item => (
            <li key={item.id}>{item.widget.label}</li>
          ))}
        </ul> */}
        {
          components.map(item => {
            const Widget = WidgetMap.get(item.widget.name) as FC<any>
            return <Widget key={item.id} {...item.props} />
          })
        }
      </div>
    </>
  )
}

export default Editor
