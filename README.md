# low-code

## 1. 项目介绍

本项目是一个低代码平台，通过拖拽组件的方式，快速生成一个可运行的项目，目前支持的组件有：
  + 暂无

## 2. 开发环境

+ Node.js: v16.x+
+ VsCode插件: Prettier, ESLint

### 2.1. 安装依赖

```bash
npm install
```

### 2.2. 启动项目

```bash
npm run dev
```

### 2.3. 打包项目

```bash
npm run build
```

#### 在 React 中，element 和 component 的区别

+ element: element 是一个对象，表示一个 DOM 节点或一个 component 实例及其属性。它是一个简单的对象，不是一个真正的 DOM 元素。它只包含关于 component 类型（例如 Button ）、属性（例如 color ）和任何嵌套的子元素的信息。element 不是一个实际的实例。它只是一种告诉 React 您想要在屏幕上显示什么的方式。
+ component: 是一个函数或一个类，可以选择接受输入并返回一个 React element。component 是一个模板。一个蓝图。一个全局定义。它可以接受 props 和 state 作为输入，并返回描述 UI 的 element。component 可以是函数式的或类式的，也可以是自定义的或内置的。

## 支持
[react-draggable](https://juejin.cn/post/7206974675027984443)