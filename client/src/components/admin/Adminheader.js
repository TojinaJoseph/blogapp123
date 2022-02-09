import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Typography, Grid} from '@mui/material'
import './Admin.css'


const Adminheader = () => {
    return (
        <div>
             <AppBar>
              <Grid container >
                  
                  
                  <Toolbar >
                  
                  <Link className="blog" to="/">
                  <Typography >MyBlog</Typography>
                  </Link>
                    
                    <Link className="log" to="/adminhome">
                    <Typography  >Articlelist</Typography>
                    </Link>
                      
                   <Link className="reg" to="/addblog" >
                   <Typography>addblog</Typography>
                   </Link>

                   <Link className="reg" to="/" >
                   <Typography>Logout</Typography>
                   </Link>
                     
                      
                      </Toolbar>
                      

                     
                  
              </Grid>

          </AppBar>
        </div>
    )
}

export default Adminheader
