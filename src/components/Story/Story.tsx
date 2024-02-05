import React from 'react'
import './Story.css'
import Form from '../form/Form'
import MoreSelect from '../moreSelect/MoreSelect'
import { Container, Paper, LinearProgress, Collapse, Divider } from '@mui/material'
import { useAppSelector } from '../../redux/hooks'
import ConversationText from '../conversationText/ConversationText'

const Story = () => {
  const isThinking = useAppSelector((state) => state.aiResponse.isThinking)
  const conversation = useAppSelector((state) => state.conversation.conversation)
  const [showConversation, setShowConversation] = React.useState(false)

  React.useEffect(() => {
    let show = false
    conversation.forEach((c) => {
      if (c.role === 'assistant' && c.content !== undefined && c.content !== null) {
        show = true
      }
    })
    setShowConversation(show)
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
            width: '90%',
            boxShadow: 'inset  0 -15px 10px -5px #c0c0c0'
          }
        }}
        elevation={3}
        square={false}
      >
        <Collapse in={showConversation}>
          {conversation.map((c, i) => {
            if (c.role === 'assistant') {
              return (
                <>
                  <ConversationText
                    key={i}
                    text={c.content !== undefined && c.content !== null ? c.content : ''}
                  />
                  <Divider key={i + 1} sx={{ mb: 3, mt: 3 }} />
                </>
              )
            }
          })}
          <MoreSelect />
        </Collapse>
        {isThinking && <LinearProgress color="secondary" variant="indeterminate" />}
      </Paper>
    </Container>
  )
}

export default Story
