import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { IconButton, Tooltip } from '@mui/material'

interface copyButtonProps {
  copyText: string
}

const CopyButton = (props: copyButtonProps) => {
  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(props.copyText)
    } catch (error) {
      alert('Error copying to clipboard:')
    }
  }

  return (
    <Tooltip title="Copy text">
      <IconButton sx={{ float: 'right', mb: 1 }} size="small" onClick={copyToClipBoard}>
        <ContentCopyIcon />
      </IconButton>
    </Tooltip>
  )
}

export default CopyButton
