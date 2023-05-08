import { CSSProperties } from 'react'
export type RouteError = {
  statusText: string
  message: string
  data: string
  status: number
  internal: boolean
  error: Error
}

type Contact = {
  id: string
  createdAt: number
  favorite: boolean
  first: string
  last: string
  avatar: string
  twitter: string
  notes: string
}

export type IContact = Partial<Contact>

// 所有组件的名称
type WidgetName = 'Circle' |'Rectangle'| 'Table'

export type WidgetProps = {
  style: CSSProperties
  text?: string
}

// 组件的基本信息
export type WidgetInfo = {
  name: WidgetName
  label: string // 组件的别名
  icon: string // 组件的图标
  info?: {}
}

// 组件的详细信息
export type ComponentInfo = {
  id: string
  widget: WidgetInfo
  props: any // 组件的附加属性
}
