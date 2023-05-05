import { FC, useState } from 'react'

interface IContextMenuProps {
  postion: number[]
  show: boolean
}

const ContextMenu:FC<IContextMenuProps> = ({ postion = [0, 0], show = false }) => {
  const [focusing] = useState(false)
  const [locked, setLocked] = useState(false)
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

  const notFocusingOption = (<li className="text-sm px-5 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis text-gray-600 h-8 flex items-center cursor-pointer hover:bg-gray-100" onClick={paste} >粘贴</li>)
  const lockedOption = (<li className="text-sm px-5 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis text-gray-600 h-8 flex items-center cursor-pointer hover:bg-gray-100" onClick={unlock}>解锁</li>)

  const defaultOption = (<>
    <li className="text-sm px-5 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis text-gray-600 h-8 flex items-center cursor-pointer hover:bg-gray-100" onClick={copy} >复制</li>
    <li className="text-sm px-5 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis text-gray-600 h-8 flex items-center cursor-pointer hover:bg-gray-100" onClick={paste} >粘贴</li>
    <li className="text-sm px-5 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis text-gray-600 h-8 flex items-center cursor-pointer hover:bg-gray-100" onClick={cut} >剪切</li>
    <li className="text-sm px-5 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis text-gray-600 h-8 flex items-center cursor-pointer hover:bg-gray-100" onClick={del} >删除</li>
    <li className="text-sm px-5 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis text-gray-600 h-8 flex items-center cursor-pointer hover:bg-gray-100" onClick={lock} >锁定</li>
    <li className="text-sm px-5 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis text-gray-600 h-8 flex items-center cursor-pointer hover:bg-gray-100" onClick={toTop} >置顶</li>
    <li className="text-sm px-5 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis text-gray-600 h-8 flex items-center cursor-pointer hover:bg-gray-100" onClick={toBottom} >置底</li>
    <li className="text-sm px-5 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis text-gray-600 h-8 flex items-center cursor-pointer hover:bg-gray-100" onClick={moveUp} >上移</li>
    <li className="text-sm px-5 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis text-gray-600 h-8 flex items-center cursor-pointer hover:bg-gray-100" onClick={moveDown} >下移</li>
  </>)

  return show
    ? (
    <div className="absolute z-50" style={{
      top: postion[1],
      left: postion[0]
    }}>
      <ul className="border border-gray-300 rounded-md bg-white shadow-lg m-2 p-3">
        {
          focusing ? locked ? lockedOption : defaultOption : notFocusingOption
        }
      </ul>
    </div>
      )
    : null
}
// ContextMenu.defaultProps has been replaced with JavaScript default parameters

export default ContextMenu
