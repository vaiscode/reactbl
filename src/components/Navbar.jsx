import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
          </Typography>
          <Button color="inherit"><Link to={'/blogs'} style={{textDecoration:'none',color:'white'}}>Blogs</Link></Button>
          <Button color="inherit"><Link to={'/add'} style={{textDecoration:'none',color:'white'}}>AddBlog</Link></Button>
          <Button color="inherit"><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Logout</Link></Button>
          </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar