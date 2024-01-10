import './Header.css'
import { AppBar, Toolbar, Typography } from '@mui/material'
import elficon from '../../assets/elficon.png'

const Header = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="elfcontainer">
          <img className="elficon" src={elficon} alt="elf icon png" />
        </div>
        <Typography variant="h6" component="div">
          My DnD AI
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
