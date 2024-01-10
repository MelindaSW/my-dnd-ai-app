import './Backstory.css'
import Form from '../../components/form/Form'
import CopyButton from '../../components/copyButton/copyButton'
import { Container, Paper, Typography, LinearProgress } from '@mui/material'
import { useAppSelector } from '../../redux/hooks'

const Backstory = () => {
  const backStory = useAppSelector((state) => state.aiResponse.backstory)
  const isThinking = useAppSelector((state) => state.aiResponse.isThinking)

  return (
    <Container
      sx={{
        width: '100 %',
        display: 'flex',
        gap: 0.7,
        mt: 15,
        // ml: 0,
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
            boxShadow: 'inset  0 -10px 7px -5px #00000030'
          }
        }}
        elevation={3}
        square={false}
      >
        <CopyButton
          copyText={backStory === undefined || backStory === null ? '' : backStory}
        />
        {isThinking && <LinearProgress color="secondary" variant="indeterminate" />}
        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
          {backStory}
        </Typography>
      </Paper>
    </Container>
  )
}

export default Backstory
