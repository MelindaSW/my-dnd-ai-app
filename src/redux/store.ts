import { configureStore } from '@reduxjs/toolkit'
import aiResponseReducer from './slices/AIresponseSlice'

const store = configureStore({
  reducer: {
    aiResponse: aiResponseReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
