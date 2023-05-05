import { useState, useRef } from 'react'

type TextStyle={
  color: string // 文字颜色
  fontSize: number|string // 文字大小
  fontWeight: number|'normal'|'bold'|'bolder'|'lighter' // 文字粗细
  height: number // 组件高度
  left: number // 组件左边距离
  letterSpacing: number|string // 文字间距
  lineHeight: number|string // 文字行高
  opacity: number // 文字透明度
  rotate: number // 组件旋转角度
  textAlign: 'left'|'center'|'right' // 文字对齐方式
  top: number // 组件上边距离
  verticalAlign:'top'|'middle'|'bottom'|'baseline'
  width: number // 组件宽度
}

interface ITextProps {
  text?: string // 文本内容
  style: TextStyle // 样式
  isLocked: boolean // 是否锁定
}

const Text = (props: ITextProps) => {
  const [editMode, setEditMode] = useState(false)
  const [canEdit, setCanEdit] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)
  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      setCanEdit(false)
    }
  }
  const handleKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      setEditMode(false)
    }
  }
  const setEdit = () => {
    setEditMode(true)
    setCanEdit(true)
    setTimeout(() => {
      textRef.current!.focus()
    }, 0)
  }
  const handlePaste = (e: any) => {}
  const handleMouseDown = (e: any) => {}
  const handleBlur = (e: any) => {}
  const handleInput = (e: any) => {}

  return (
    <>
      {editMode
        ? (
        <div className="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
          <div
            ref={textRef}
            contentEditable={canEdit}
            className={canEdit ? 'can-edit' : ''}
            tabIndex={0}
            style={{
              verticalAlign: props.style.verticalAlign
            }}
            onDoubleClick={setEdit}
            onPaste={handlePaste}
            onMouseDown={handleMouseDown}
            onBlur={handleBlur}
            onInput={handleInput}
          >
            {props.text}
          </div>
        </div>
          )
        : (
        <div className="text preview">
          <div style={{ verticalAlign: props.style.verticalAlign }}>{props.text}</div>
        </div>
          )}
    </>
  )
}

export default Text
