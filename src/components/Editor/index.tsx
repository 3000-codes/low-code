import { useState, MouseEvent as RMouseEvent } from 'react'
import Grid from './Grid'
import ContextMenu from '../ContextMenu'
import './index.scss'
const Editor = () => {
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState([0, 0])
  const handleContextMenu = (e: RMouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    setShowContextMenu(true)
    setContextMenuPosition([e.clientX, e.clientY])
  }
  return <>
    <div className="canvas-contain" onContextMenu={handleContextMenu}>
      <Grid />
      <ContextMenu show={showContextMenu} postion={contextMenuPosition}/>
    </div>
  </>
}

export default Editor
