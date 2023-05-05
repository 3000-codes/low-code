import { FC, useState } from 'react'
import './index.scss'
interface IContextMenuProps {
  postion: number[]
  show: boolean
}

const ContextMenu:FC<IContextMenuProps> = (props) => {
  const [focusing, setFocusing] = useState(false)
  const [locked, setLocked] = useState(false)
  const handleMouseUp = () => {
    setFocusing(false)
  }
  const copy = () => {}
  const paste = () => {}
  const cut = () => {}
  const del = () => {}
  const lock = () => {}
  const unlock = () => {
    setLocked(false)
  }
  const toTop = () => {}
  const toBottom = () => {}
  const moveUp = () => {}
  const moveDown = () => {}

  const notFocusingOption = (<li onClick={paste} >粘贴</li>)
  const lockedOption = (<li onClick={unlock}>解锁</li>)

  const defaultOption = (<>
    <li onClick={copy} >复制</li>
    <li onClick={paste} >粘贴</li>
    <li onClick={cut} >剪切</li>
    <li onClick={del} >删除</li>
    <li onClick={lock} >锁定</li>
    <li onClick={toTop} >置顶</li>
    <li onClick={toBottom} >置底</li>
    <li onClick={moveUp} >上移</li>
    <li onClick={moveDown} >下移</li>
  </>)

  return props.show
    ? (
    <div className="contextmenu" style={{
      top: props.postion[1],
      left: props.postion[0]
    }}>
      <ul onMouseUp={handleMouseUp}>
        {
          focusing ? locked ? lockedOption : defaultOption : notFocusingOption
        }
      </ul>
    </div>
      )
    : null
}
ContextMenu.defaultProps = {
  show: false,
  postion: [0, 0]
}

export default ContextMenu
