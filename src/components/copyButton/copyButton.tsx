import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { IconButton } from '@mui/material'

interface copyButtonProps {
  copyText: string
}

const CopyButton = (props: copyButtonProps) => {
  const copyToClipBoard = async () => {
    console.log(props.copyText)
    try {
      await navigator.clipboard.writeText(props.copyText)
      alert('Text copied to clipboard')
    } catch (error) {
      alert('Error copying to clipboard:')
    }
  }
  return (
    <IconButton size="small" onClick={copyToClipBoard}>
      <ContentCopyIcon />
    </IconButton>
  )
}

export default CopyButton
