import { useState, useRef, MouseEvent as RMouseEvent, DragEvent as RDragEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from './Grid'
import ContextMenu from '../ContextMenu'
import DragableWidget from '../widgets/DragableWidget'
import Widgets from '../widgets'
import { addComponent, updateComponent, COMPONENTS_KEY, RootState } from '@/store'
import { uuid } from '@/utils'
import { WidgetName, ComponentInfo } from '@/typing'

const Editor = () => {
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState([0, 0])
  const editorRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const components = useSelector((state: RootState) => state[COMPONENTS_KEY]) as ComponentInfo[]
  const handleContextMenu = (e: RMouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    const { current } = editorRef
    if (!current) return
    // FIXME: 当鼠标在边缘时，菜单展示不完全
    const { left, top } = current.getBoundingClientRect()
    const x = Math.floor(e.clientX - left)
    const y = Math.floor(e.clientY - top)
    setShowContextMenu(true)
    setContextMenuPosition([x, y])
  }

  const handleDrop = (e: RDragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // TODO:获取当前鼠标位置，添加组件到store
    const { current } = editorRef
    if (!current) return
    // FIXME: 当鼠标在边缘时，菜单展示不完全
    const { left, top } = current.getBoundingClientRect()
    const x = Math.floor((e.clientX - left - 30) / 2)
    const y = Math.floor((e.clientY - top - 30) / 2)
    const widgetId = e.dataTransfer.getData('widgetId')
    // 更新组件
    if (widgetId) {
      const component = components.find((item) => item.id === widgetId)
      return component && dispatch(updateComponent({ ...component, props: { ...component.props, style: { ...component.props.style, left: x, top: y } } }))
    }
    const widgetName = e.dataTransfer.getData('widgetName') as WidgetName
    const widget = Widgets.find((item) => item.name === widgetName)
    if (!widget) return

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
        {components.map((item) => <DragableWidget key={item.id} {...item} />)}
      </div>
    </>
  )
}

export default Editor
