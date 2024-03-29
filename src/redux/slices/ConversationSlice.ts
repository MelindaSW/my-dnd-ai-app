import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs'

interface Conversation {
  conversation: ChatCompletionMessageParam[]
}

const initialState: Conversation = {
  conversation: []
}

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    addToConversation: (state, action: PayloadAction<ChatCompletionMessageParam>) => {
      state.conversation.push(action.payload)
    },
    clearConversation: (state) => {
      state.conversation = []
    }
  }
})

export const { addToConversation, clearConversation } = conversationSlice.actions
export const conversation = (state: RootState) => state.conversation

export default conversationSlice.reducer
