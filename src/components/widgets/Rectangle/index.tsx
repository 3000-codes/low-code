import { FC } from 'react'
import { WidgetProps } from '@/typing'
const defaultProps: WidgetProps = {
  style: {
    left: 0,
    top: 0
  },
  text: '矩形'
}
const Rectangle: FC<WidgetProps> = (props) => {
  return (
    <div className="w100% h100%  absolute flex justify-center items-center b b-solid b-#ccc" style={props.style}>
      {props.text}
    </div>
  )
}
Rectangle.defaultProps = defaultProps

export default Rectangle
export { defaultProps }
