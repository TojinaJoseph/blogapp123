import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Typography, Grid} from '@mui/material'
import './Mainheader.css'

const Mainheader = () => {
    return (
        <div>
             <AppBar>
              <Grid container >
                  
                  
                  <Toolbar >
                  
                  <Link className="blog" to="/">
                  <Typography >MyBlog</Typography>
                  </Link>
                    
                    <Link className="log" to="/articlelist">
                    <Typography>Articlelist</Typography>
                    </Link>
                      
                   {/* <Link className="reg" to="/about" >
                   <Typography  >about</Typography>
                   </Link> */}

                  <Link className="reg" to="/" >
                   <Typography>Logout</Typography>
                   </Link> 
                   {/* <Link className="reg" to="/" >
                   <Typography>Logout</Typography>
                   </Link>  */}
                      
                      </Toolbar>
                      

                     
                  
              </Grid>

          </AppBar>
        </div>
    )
}

export default Mainheader
