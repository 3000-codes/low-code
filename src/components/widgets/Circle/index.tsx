import { FC, CSSProperties } from 'react'
type CircleProps = {
  style: CSSProperties
  text?: string
}
const defaultProps: CircleProps = {
  style: {
    left: 0,
    top: 0
  },
  text: '圆'
}
const Circle: FC<CircleProps> = (props: CircleProps) => {
  return (
    <div className="w60px h60px border-rd-50% b b-#ccc b-solid absolute flex justify-center items-center" style={props.style}>
      {props.text}
    </div>
  )
}
Circle.defaultProps = defaultProps

export default Circle
export { defaultProps }
