import { configureStore } from '@reduxjs/toolkit'
import aiResponseReducer from './slices/AIresponseSlice'
import conversationReducer from './slices/ConversationSlice'

const store = configureStore({
  reducer: {
    aiResponse: aiResponseReducer,
    conversation: conversationReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
