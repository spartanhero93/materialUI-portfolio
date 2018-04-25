import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import Button from 'material-ui/Button'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import SimpleList from './SimpleList'

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
        <Button color='primary' onClick={this.toggleDrawer('left', true)}>
          Open Left
        </Button>
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
