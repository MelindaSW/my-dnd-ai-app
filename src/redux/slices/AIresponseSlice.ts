import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'

// Define a type for the slice state
interface AiResponseState {
  isThinking: boolean
  error: string
}

// Define the initial state using that type
const initialState: AiResponseState = {
  isThinking: false,
  error: ''
}

export const aiResponseSlice = createSlice({
  name: 'airesponse',
  initialState,
  reducers: {
    updateIsThinking: (state, action: PayloadAction<boolean>) => {
      state.isThinking = action.payload
    },
    updateError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

export const { updateIsThinking, updateError } = aiResponseSlice.actions

export const aiResponses = (state: RootState) => state.aiResponse

export default aiResponseSlice.reducer
