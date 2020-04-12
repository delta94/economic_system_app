import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

import { MenuList, MenuItem, Paper, ListItemIcon, ListItemText } from '@material-ui/core';

const styles = theme => ({
  menu: {
    maxWidth: 400,
    margin: '20 auto'
  },
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

function StyledMenu(props) {
  const { classes } = props;

  return (
    <Paper className={classes.menu}>
      <MenuList>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <SendIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} variant="inset" primary="Sent mail" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} variant="inset" primary="Drafts" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} variant="inset" primary="Inbox" />
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

StyledMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StyledMenu);
