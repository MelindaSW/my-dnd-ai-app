import { Alert, Collapse } from '@mui/material'

interface ErrorMessageProps {
  display: boolean
  message: string
}

const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <Collapse in={props.display}>
      <Alert severity="error">{props.message}</Alert>
    </Collapse>
  )
}

export default ErrorMessage
