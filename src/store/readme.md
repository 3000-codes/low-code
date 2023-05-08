# @reduxjs/toolkit

## createSlice 创建子 store

```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const TODOS_FEATURE_KEY = 'todos'

// createAsyncThunk('[slice name]/[action name]', payloadCreator, options)

// 创建执行异步操作的action
// payload触发action传递的参数  thunkAPI.dispatch调用action
export const loadTodos = createAsyncThunk('todos/loadTodos', (payload, thunkAPI) => {
  axios.get(payload).then((response) => thunkAPI.dispatch(setTodos(response.data)))
})
// 返回Promise
export const loadTodos2 = createAsyncThunk('todos/loadTodos2', (payload) => {
  return axios.get(payload).then((response) => response.data)
})

const { reducer: TodosReducer, actions } = createSlice({
  name: TODOS_FEATURE_KEY,
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload)
    },
    setTodos(state, action) {
      action.payload.forEach((todo) => state.push(todo))
    }
  },
  extraReducers: {
    // 成功fulfilled时执行的操作  pending等待  rejected拒绝
    [loadTodos2.fulfilled](state, action) {
      action.payload.forEach((todo) => state.push(todo))
    }
  }
})

export const { addTodo, setTodos } = actions
export default TodosReducer
```

## configureStore 创建 store 核心

```js
import { configureStore } from '@reduxjs/toolkit'
import TodosReducer, { TODOS_FEATURE_KEY } from './todos'

export default configureStore({
  reducer: {
    [TODOS_FEATURE_KEY]: TodosReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})
```

## Provider 注册全局 store

```js
import { Provider } from 'react-redux'
import store from './store'

// other code...
;<Provider store={store}>
  <App />
</Provider>
```

## useSelector 使用 store

```js
// src/Todos.js
import { addTodo, TODOS_FEATURE_KEY, loadTodos } from './store/todos'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function Todos() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state[TODOS_FEATURE_KEY])
  useEffect(() => {
    dispatch(loadTodos('https://jsonplaceholder.typicode.com/todos'))
  }, [])
  return (
    <div>
      <button onClick={() => dispatch(addTodo({ title: '测试任务' }))}>添加任务</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
```

## getDefaultMiddleware 中间件

getDefaultMiddleware() 会返回一个中间件数组，包含了默认的中间件，以及一些额外的中间件，比如 redux-thunk 和 redux-promise-middleware。

```js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'

export default configureStore({
  reducer: {
    /** reducers */
  },
  middleware: [...getDefaultMiddleware(), logger]
})
```

## createEntityAdapter 实体适配器

将状态放入实体适配器，实体适配器提供操作状态的各种方法，简化操作，提高性能

```js
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

const todosAdapter = createEntityAdapter()

const { reducer: TodosReducer, actions } = createSlice({
  name: TODOS_FEATURE_KEY,
  initialState: todosAdapter.getInitialState(), // 初始化状态
  reducers: {
    addTodo: todosAdapter.addOne, // 添加一条数据
    addTodos: todosAdapter.addMany, // 添加多条数据
    setTodos: todosAdapter.setAll // 设置所有数据
  }
})

// 使用
import { addTodo, TODOS_FEATURE_KEY } from './store/todos'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadTodos } from './store/todos'

function Todos() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state[TODOS_FEATURE_KEY].entities)
  useEffect(() => {
    dispatch(loadTodos('https://jsonplaceholder.typicode.com/todos'))
  }, [])
  return (
    <div>
      <button onClick={() => dispatch(addTodo({ id: Math.random(), title: '测试任务' }))}>添加任务</button>
      <ul>
        {Object.values(todos).map((todo, index) => (
          <li key={index}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
```

## createSelector 创建选择器

简化获取状态的方法

```js
import { createSelector } from '@reduxjs/toolkit'

const { selectAll } = todosAdapter.getSelectors()
export const selectTodosList = createSelector((state) => state[TODOS_FEATURE_KEY], selectAll)

// 使用
import { addTodo, selectTodosList } from './store/todos'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadTodos } from './store/todos'

function Todos() {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodosList)
  useEffect(() => {
    dispatch(loadTodos('https://jsonplaceholder.typicode.com/todos'))
  }, [])
  return (
    <div>
      <button onClick={() => dispatch(addTodo({ id: Math.random(), title: '测试任务' }))}>添加任务</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
```

## TODOS

- [持久化](https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist)
  - [文章](https://juejin.cn/post/7138672042185850917)
- [redux-saga](https://redux-saga.js.org/)
- ts 类型支持
