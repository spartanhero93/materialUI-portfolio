import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import SimpleList from './SimpleList'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { createMuiTheme } from 'material-ui/styles'

// <==== Reusable Colors ====>//
const [bgColor, fontColor, particleColor] = ['#222930', '#E9E9E9', '#4EB1BA']

class Navbar extends Component {
  state = {
    left: false
  }

  toggleDrawer = (side, open) => () => {
    this.setState({ [side]: open })
  }

  render () {
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton color='inherit' aria-label='Menu'>
              <MenuIcon onClick={this.toggleDrawer('left', true)} />
            </IconButton>
            <Typography variant='title' color='inherit'>
              Hello, Im Luis
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          <div
            tabIndex={0}
            role='button'
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <SimpleList />
          </div>
        </Drawer>
      </div>
    )
  }
}

export default Navbar
