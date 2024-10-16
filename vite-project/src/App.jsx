import { ButtonGroup } from '@mui/material'
import './App.css'
<<<<<<< HEAD
import './ColorButton.jsx'
import ColorButton from './ColorButton.jsx'
import Grid from '@mui/material/Grid2'
=======
import './components/ColorButton.jsx'
import ColorButton from './components/ColorButton.jsx'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

>>>>>>> dc6e4a375fc2f77964fed0a2bdafffc24984fe8e


function App() {
  
  return (
<<<<<<< HEAD
    <><div>
      <p>Test</p>
      <p className ="text-3xl m-5 border-4 rounded-md">test</p>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>

      </div>

      
      <Grid container spacing={2}>
        <Grid size={1}>
          <ColorButton text="home"></ColorButton>    
        </Grid>
        <Grid size={1}>
          <ColorButton text="games"></ColorButton>
        </Grid>
        <Grid size={1}>
          <ColorButton text="account"></ColorButton>
        </Grid>
      </Grid>
      </div>
=======
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
>>>>>>> dc6e4a375fc2f77964fed0a2bdafffc24984fe8e
    </>
  )
}

export default App
