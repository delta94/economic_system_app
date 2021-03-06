import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import { Typography, Button, Grid, Snackbar, Slide, Fade, IconButton } from '@material-ui/core';

const styles = theme => ({
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  close: {
    width: theme.spacing(4)
  },
  divider: {
    display: 'block',
    margin: `${theme.spacing(3)}px 0`,
  },
  button: {
    margin: theme.spacing(1)
  }
});

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

class TransitionNotif extends PureComponent {
  state = {
    open: false,
    open2: false,
    open3: false,
    transition: null,
    messageInfo: {},
  };

  queue = [];

  handleClickQueue = message => () => {
    this.queue.push({
      message,
      key: new Date().getTime(),
    });

    if (this.state.open3) {
      // immediately begin dismissing current message
      // to start showing new one
      this.setState({ open3: false });
    } else {
      this.processQueue();
    }
  };

  processQueue = () => {
    if (this.queue.length > 0) {
      this.setState({
        messageInfo: this.queue.shift(),
        open3: true,
      });
    }
  };

  handleCloseQueue = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open3: false });
  };

  handleExited = () => {
    this.processQueue();
  };

  handleClick = transition => () => {
    this.setState({ open: true, transition });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClick2 = () => {
    this.setState({ open2: true });
  };

  handleClose2 = () => {
    this.setState({ open2: false });
  };

  render() {
    const { classes } = this.props;
    const { message, key } = this.state.messageInfo;
    return (
      <Fragment>
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          direction="row"
          spacing={2}
        >
          <Grid
            item
            md={4}
          >
            <Typography variant="button" className={classes.divider}>Transition</Typography>
            <div>
              <Button variant="contained" className={classes.button} onClick={this.handleClick(TransitionLeft)}>Right</Button>
              <Button variant="contained" className={classes.button} onClick={this.handleClick(TransitionUp)}>Up</Button>
              <Button variant="contained" className={classes.button} onClick={this.handleClick(TransitionRight)}>Left</Button>
              <Button variant="contained" className={classes.button} onClick={this.handleClick(TransitionDown)}>Down</Button>
              <Snackbar
                open={this.state.open}
                onClose={this.handleClose}
                TransitionComponent={this.state.transition}
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span>I love snacks</span>}
              />
            </div>
          </Grid>
          <Grid
            item
            md={4}
          >
            <Typography variant="button" className={classes.divider}>Change Transition</Typography>
            <div>
              <Button variant="contained" className={classes.button} onClick={this.handleClick2}>Open with Fade Transition</Button>
              <Snackbar
                open={this.state.open2}
                onClose={this.handleClose2}
                TransitionComponent={Fade}
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span>I love snacks</span>}
              />
            </div>
          </Grid>
          <Grid
            item
            md={4}
          >
            <Typography variant="button" className={classes.divider}>Consecutive Snackbars</Typography>
            <div>
              <Button variant="contained" className={classes.button} onClick={this.handleClickQueue('message a')}>Show message A</Button>
              <Button variant="contained" className={classes.button} onClick={this.handleClickQueue('message b')}>Show message B</Button>
              <Snackbar
                key={key}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={this.state.open3}
                autoHideDuration={6000}
                onClose={this.handleCloseQueue}
                onExited={this.handleExited}
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span>{message}</span>}
                action={[
                  <Button key="undo" color="secondary" size="small" onClick={this.handleClose2}>
                    UNDO
                  </Button>,
                  <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={this.handleCloseQueue}
                  >
                    <CloseIcon />
                  </IconButton>
                ]}
              />
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

TransitionNotif.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransitionNotif);
