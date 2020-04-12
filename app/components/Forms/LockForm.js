import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Field, reduxForm } from 'redux-form/immutable';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Help from '@material-ui/icons/Help';
import dummy from 'ba-api/dummyContents';
import avatarApi from 'ba-api/avatars';
import {
  Button,
  Popover,
  FormControl,
  IconButton,
  Typography,
  InputAdornment,
  Paper,
  Avatar,
} from '@material-ui/core';
import { TextFieldRedux } from './ReduxFormMUI';
import styles from './user-jss';


// validation functions
const required = value => (value == null ? 'Required' : undefined);

class LockForm extends React.Component {
  state = {
    anchorEl: null,
  };

  handleShowHint = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const {
      classes,
      handleSubmit,
      pristine,
      submitting
    } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.formWrap}>
        <Paper className={classes.lockWrap}>
          <form onSubmit={handleSubmit}>
            <Avatar alt="John Doe" src={avatarApi[6]} className={classes.avatar} />
            <Typography className={classes.userName} variant="h4">{dummy.user.name}</Typography>
            <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="password"
                  component={TextFieldRedux}
                  type="password"
                  label="Your Password"
                  required
                  validate={required}
                  className={classes.field}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Helper Hint"
                          onClick={this.handleShowHint}
                        >
                          <Help />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
              <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={this.handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography className={classes.hint}>Hint: Type anything to unlock!</Typography>
              </Popover>
            </div>
            <div className={classes.btnArea}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Continue
                <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} disabled={submitting || pristine} />
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

LockForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const LockFormReduxed = reduxForm({
  form: 'immutableELockFrm',
  enableReinitialize: true,
})(LockForm);

export default withStyles(styles)(LockFormReduxed);
