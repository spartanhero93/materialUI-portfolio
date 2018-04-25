import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const [bgColor, fontColor, particleColor] = ['#222930', '#E9E9E9', '#4EB1BA']

const ButtonAppBar = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='title' color='inherit'>
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default ButtonAppBar
