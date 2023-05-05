import './index.scss'
type CircleProps = {}
const defaultProps: CircleProps = {}
const Circle = (props: CircleProps) => {
  return (
    <div className="circle">
      Circle
    </div>
  )
}
Circle.defaultProps = defaultProps

export default Circle
export { defaultProps }
