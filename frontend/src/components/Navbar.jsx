import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant="h5">details</Typography>&nbsp;
                  <Link to='/add'>
                  
                      <Button variant="contained" color="secondary">add</Button>
                  </Link>&nbsp;
                  <Link to='/view'>
                      <Button variant="contained" color="secondary">View</Button>
                      </Link>
              </Toolbar>
          </AppBar><br /><br /><br />
      
      </div>
      
  )
}

export default Navbar
