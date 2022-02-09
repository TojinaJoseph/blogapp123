import React from 'react'
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Typography, Grid} from '@mui/material'
import './Header.css'



 const Header = () => {
    return (
        <div>
             <AppBar>
              <Grid container > 
                  <Toolbar >
                     <Typography >Home</Typography>
                     {/* <DropDownMenu> */}
                    
                     <Link className="link" to="/">
                    <Typography className="log">Login</Typography>
                    </Link>
                    <Link className="link" to="/adminlogin">
                    <Typography className="log1">Adminlogin</Typography>
                    </Link>
                    
                    
                   <Link className="link" to="/signup">
                   <Typography className="reg" >Signup</Typography>
                   </Link>   
                 
                      </Toolbar>
                   
              </Grid>

          </AppBar>
        </div>
    )
}
export default Header