import { FC } from 'react'
import { WidgetProps } from '@/typing'
const defaultProps: WidgetProps = {
  style: {
    left: 0,
    top: 0
  },
  text: '圆'
}
const Circle: FC<WidgetProps> = (props) => {
  return (
    <div className="w100% h100% border-rd-50% b b-#ccc b-solid absolute flex justify-center items-center" style={props.style}>
      {props.text}
    </div>
  )
}
Circle.defaultProps = defaultProps

export default Circle
export { defaultProps }
