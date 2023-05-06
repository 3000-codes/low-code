import { useState, useRef, MouseEvent as RMouseEvent } from 'react'
import Grid from './Grid'
import ContextMenu from '../ContextMenu'
import './index.scss'
const Editor = () => {
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState([0, 0])
  const editorRef = useRef<HTMLDivElement>(null)
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
  return <>
    <div ref={editorRef} className="relative w100% h100%" onContextMenu={handleContextMenu}>
      <Grid />
      <ContextMenu show={showContextMenu} postion={contextMenuPosition}/>
    </div>
  </>
}

export default Editor
