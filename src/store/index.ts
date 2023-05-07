import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { COMPONENTS_KEY, componentsReducer } from './components'
const store =
  configureStore({
    reducer: {
      [COMPONENTS_KEY]: componentsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  })

export default store
export type RootState = ReturnType<typeof store.getState>
export * from './components'
