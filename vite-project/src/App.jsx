import { ButtonGroup } from '@mui/material'
import './App.css'
import './components/ColorButton.jsx'
import ColorButton from './components/ColorButton.jsx'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';



function App() {
  
  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          >
          <MenuIcon />
        </IconButton>
        <h1>Gambling Website!!!</h1>
      </Toolbar>
    </AppBar>
    <div className="wrap">
    <div className="container">
      <ButtonGroup orientation="vertical">
      <Button variant="outlined">Home</Button>
      <Button variant="outlined">Games</Button>
      </ButtonGroup>
    </div>
    </div>
    </>
  )
}

export default App
