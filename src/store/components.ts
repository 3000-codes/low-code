import { createSlice } from '@reduxjs/toolkit'
import { ComponentInfo } from '../typing'
export const COMPONENTS_KEY = 'component'

const { reducer: componentsReducer, actions } = createSlice({
  name: COMPONENTS_KEY,
  initialState: [] as ComponentInfo[],
  reducers: {
    addComponent: (state, action) => {
      state.push(action.payload)
    },
    removeComponent: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
    updateComponent: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id)
      if (index !== -1) {
        state.splice(index, 1, action.payload)
      }
    },
    clearComponents: () => {
      return []
    }
  }
})

export const { addComponent, removeComponent, updateComponent, clearComponents } = actions
export { componentsReducer }
