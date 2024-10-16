import './App.css'
import './ColorButton.jsx'
import ColorButton from './ColorButton.jsx'
import Grid from '@mui/material/Grid2'


function App() {
  
  return (
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
    </>
  )
}

export default App
