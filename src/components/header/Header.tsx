import './Header.css'
import { AppBar, Toolbar, Typography } from '@mui/material'
import elficon from '../../assets/elficon.png'

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: 'primary' }} color="primary">
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#eee',
          color: 'black'
        }}
      >
        <div className="elfcontainer">
          <img className="elficon" src={elficon} alt="elf icon png" />
        </div>
        <Typography variant="h5" component="div">
          My DnD AI
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
