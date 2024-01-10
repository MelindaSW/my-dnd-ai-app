import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'

// Define a type for the slice state
interface AiResponseState {
  isThinking: boolean
  backstory: string | null | undefined
}

// Define the initial state using that type
const initialState: AiResponseState = {
  isThinking: false,
  backstory: ''
}

export const aiResponseSlice = createSlice({
  name: 'airesponse',
  initialState,
  reducers: {
    updateBackstory: (state, action: PayloadAction<string | null | undefined>) => {
      state.backstory = action.payload
    },
    updateIsThinking: (state, action: PayloadAction<boolean>) => {
      state.isThinking = action.payload
    }
  }
})

export const { updateBackstory, updateIsThinking } = aiResponseSlice.actions

export const aiResponses = (state: RootState) => state.aiResponse

export default aiResponseSlice.reducer
