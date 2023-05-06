import { configureStore } from '@reduxjs/toolkit'
import componentsReducer, { COMPONENTS_KEY } from './components'
export default configureStore({
  reducer: {
    [COMPONENTS_KEY]: componentsReducer
  }
})
