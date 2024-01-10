import { Typography } from '@mui/material'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <Typography variant="body1">
        This app is created with <a href="https://react.dev/">React</a>,{' '}
        <a href="https://www.typescriptlang.org/">Typescript</a>,{' '}
        <a href="https://mui.com/">Material UI</a> and{' '}
        <a href="https://vitejs.dev/">Vite</a>. Using{' '}
        <a href="https://openai.com/">OpenAi's</a> api.
      </Typography>
    </footer>
  )
}

export default Footer
