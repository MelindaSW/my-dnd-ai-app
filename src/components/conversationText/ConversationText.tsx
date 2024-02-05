import CopyButton from '../copyButton/CopyButton'
import { Collapse, Typography } from '@mui/material'

interface conversationTextProps {
  text: string
}

const ConversationText = (props: conversationTextProps) => {
  return (
    <Collapse
      // in={backStory !== undefined && backStory !== null && backStory.length > 0}
      in={true}
    >
      <CopyButton copyText={props.text} />
      <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
        {props.text}
      </Typography>
    </Collapse>
  )
}

export default ConversationText
