import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import Button from 'material-ui/Button'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import SimpleList from './SimpleList'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

export default class SideNav extends Component {
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
