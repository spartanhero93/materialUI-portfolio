import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import DraftsIcon from '@material-ui/icons/Drafts'
import WorkIcon from '@material-ui/icons/Work'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
})

const SimpleList = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <List component='nav'>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary='My Work' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary='Drafts' />
        </ListItem>
      </List>
    </div>
  )
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleList)
