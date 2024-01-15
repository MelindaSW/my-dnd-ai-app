import React from 'react'
import './Story.css'
import Form from '../../components/form/Form'
import CopyButton from '../../components/copyButton/copyButton'
import MoreSelect from '../../components/moreSelect/MoreSelect'
import { Container, Paper, Typography, LinearProgress, Collapse } from '@mui/material'
import { useAppSelector } from '../../redux/hooks'
import { mockStory } from '../../utils/constants'

const Story = () => {
  // const backStory = useAppSelector((state) => state.aiResponse.backstory)
  const isThinking = useAppSelector((state) => state.aiResponse.isThinking)
  const conversation = useAppSelector((state) => state.conversation.conversation)
  const [completeText, setCompleteText] = React.useState('')

  React.useEffect(() => {
    const text = ''
    conversation.forEach((c) => {
      if (c.role === 'assistant' && c.content !== undefined && c.content !== null) {
        text.concat(c.content)
      }
    })
    setCompleteText(text)
  }, [conversation])

  return (
    <Container
      sx={{
        width: '100 %',
        display: 'flex',
        gap: 0.7,
        mt: 15,
        alignItems: 'flex-start',
        justifyContent: 'center',
        '@media (max-width: 873px)': {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1
        }
      }}
    >
      <Paper
        sx={{
          padding: 3,
          '@media (max-width: 873px)': {}
        }}
        elevation={3}
        square={false}
      >
        <Form />
      </Paper>
      <Paper
        sx={{
          height: 550,
          width: 500,
          padding: 3,
          overflow: 'auto',
          mb: 5,
          '@media (max-width: 873px)': {
            // width: 400
            width: '90%',
            boxShadow: 'inset  0 -15px 10px -5px #c0c0c0'
          }
        }}
        elevation={3}
        square={false}
      >
        <CopyButton copyText={completeText} />
        <Collapse
          // in={backStory !== undefined && backStory !== null && backStory.length > 0}
          in={true}
        >
          <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
            {mockStory}
          </Typography>
          <CopyButton copyText={completeText} />
          <MoreSelect />
        </Collapse>
        {isThinking && <LinearProgress color="secondary" variant="indeterminate" />}
      </Paper>
    </Container>
  )
}

export default Story
