import React from 'react'
import './MoreSelect.css'
import { TextField, MenuItem, Button, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addToConversation } from '../../redux/slices/ConversationSlice'
import { getMoreInformationPrompt } from '../../utils/prompts'
import { updateIsThinking } from '../../redux/slices/AIresponseSlice'
import CopyButton from '../copyButton/CopyButton'
import { storyOptions } from '../../utils/constants'

const MoreSelect = () => {
  const dispatch = useAppDispatch()
  const isThinking = useAppSelector((state) => state.aiResponse.isThinking)
  const conversation = useAppSelector((state) => state.conversation.conversation)
  const [value, setValue] = React.useState('')
  const [valid, setValid] = React.useState(false)
  const options = storyOptions

  React.useEffect(() => {
    setValid(value.length > 0)
  }, [value])

  const handleClick = () => {
    console.log(value)
    dispatch(
      addToConversation({ role: 'user', content: getMoreInformationPrompt(value) })
    )
    dispatch(updateIsThinking(true))
    removeStoryOption(value)
  }

  const removeStoryOption = (value: string) => {
    const index = options.indexOf(value)
    options.splice(index, 1)
  }

  const getWholeStory = () => {
    let wholeStory = ''
    conversation.forEach((c) => {
      if (c.role === 'user' || c.role === 'assistant') {
        const content = c.content !== undefined && c.content !== null ? c.content : ''
        wholeStory += content + '\n\n'
      }
    })
    console.log({ wholeStory })
    return wholeStory
  }

  return (
    <div className="container">
      {options.length > 0 && (
        <>
          <TextField
            id="more-select"
            select
            required
            label="Show me more"
            size="small"
            color="secondary"
            defaultValue={''}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            sx={{ width: 180, mr: 3 }}
          >
            {options.map((op: string, index: number) => (
              <MenuItem key={index} value={op}>
                {op}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="secondary"
            disabled={!valid || isThinking}
            onClick={handleClick}
          >
            Create
          </Button>
        </>
      )}
      {options.length === 0 && (
        <>
          <Typography
            variant="body2"
            sx={{
              whiteSpace: 'pre-line',
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 3
            }}
          >
            You have reached the end of this storytelling journey! Now it is up to you to
            bring this character on more adventures. <br /> Remember to copy the text and
            save it before you leave or create a new character. <br /> . . . . . . . . .
          </Typography>
          <CopyButton copyText={getWholeStory()} toolTip="Copy whole story" />{' '}
        </>
      )}
    </div>
  )
}

export default MoreSelect
