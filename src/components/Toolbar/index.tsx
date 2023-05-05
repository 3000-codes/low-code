import { FC, useState } from 'react'
import { Form, Button, InputNumber } from 'antd'
import { parseNumber } from '@/utils'

const Toolbar: FC = () => {
  const [width, setWidth] = useState(1200)
  const [height, setHeight] = useState(800)
  const [scale, setScale] = useState(100)

  // TODO:展示当前选中控件的JSON,未选中则展示画布JSON
  const showWidgetDetail = () => {}
  // TODO:撤消
  const undo = () => {}
  // TODO:重做
  const redo = () => {}
  // TODO:插入图片
  const insertImage = () => {}
  // TODO:预览
  const preview = () => {}
  // TODO:保存
  const save = () => {}
  // TODO:清空画布
  const clear = () => {}
  // TODO:组合
  const combine = () => {}
  // TODO:拆分
  const split = () => {}
  // TODO:锁定
  const lock = () => {}
  // TODO:解锁
  const unlock = () => {}
  // TODO:截图
  const screenshot = () => {}

  return (
    <Form layout="inline" size="middle" className="p-4 whitespace-nowrap overflow-x-auto bg-white border-b border-gray-300 align-middle">
      <Form.Item>
        <Button onClick={showWidgetDetail}>JSON</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={undo}>撤消</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={redo}>重做</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={insertImage}>插入图片</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={preview}>预览</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={save}>保存</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={clear}>清空画布</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={combine}>组合</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={split}>拆分</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={lock}>锁定</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={unlock}>解锁</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={screenshot}>截图</Button>
      </Form.Item>
      <Form.Item label="画布长">
        <InputNumber defaultValue={width} min={0} onChange={(value) => setWidth(parseNumber(value))} />
      </Form.Item>
      <Form.Item label="画布宽">
        <InputNumber value={height} min={0} onChange={(value) => setHeight(parseNumber(value))} />
      </Form.Item>
      <Form.Item label="画布比例(%)">
        <InputNumber min={0} value={scale} onChange={(value) => setScale(parseNumber(value))} />
      </Form.Item>
    </Form>
  )
}

export default Toolbar
