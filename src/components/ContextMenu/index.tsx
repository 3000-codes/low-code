import { FC, useState } from 'react'
import './index.scss'
interface IContextMenuProps {
  postion: number[]
  show: boolean
}

const ContextMenu:FC<IContextMenuProps> = (props) => {
  const [focusing, setFocusing] = useState(!false)
  const [locked, setLocked] = useState(!false)
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

  const notFocusingOption = (<li onClick={paste} >粘贴</li>) // 未聚焦时的选项 0
  const lockedOption = (<li onClick={unlock}>解锁</li>) // 锁定时的选项 01

  // 10
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
  // TODO:位运算控制菜单显示
  // const LOCKED = 1 << 0
  // const FOCUSING = 1 << 1
  // const optionList = [
  //   {
  //     label: '粘贴',
  //     limit: 0,
  //     func: paste,
  //     key: 'paste'
  //   },
  //   {
  //     label: '解锁',
  //     limit: LOCKED,
  //     func: unlock,
  //     key: 'unlock'

  //   },
  //   {
  //     label: '复制',
  //     limit: FOCUSING,
  //     func: copy,
  //     key: 'copy'
  //   }
  // ]

  // const list = optionList.reduce((prev, cur) => {
  //   if (cur.limit === ((focusing ? FOCUSING : 0) | (locked ? LOCKED : 0))) {
  //     prev.push(<li key={cur.key} onClick={cur.func} >{cur.label}</li>)
  //   }
  //   return prev
  // }, [] as ReactElement[])

  return props.show
    ? (
    <div className="absolute z-1000" style={{
      top: props.postion[1],
      left: props.postion[0]
    }}>
      <ul className='menu-li border border-#e4e7ed border-solid rounded bg-#fff my-5px px-6px box-border shadow-md' onMouseUp={handleMouseUp}>
        {
          focusing ? locked ? lockedOption : defaultOption : notFocusingOption
          // list
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
