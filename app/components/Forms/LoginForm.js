import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Field, reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import Type from 'ba-styles/Typography.scss';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AllInclusive from '@material-ui/icons/AllInclusive';
import Brightness5 from '@material-ui/icons/Brightness5';
import People from '@material-ui/icons/People';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Button, IconButton, InputAdornment, FormControl, FormControlLabel, Typography } from '@material-ui/core';
import styles from './user-jss';
import { TextFieldRedux, CheckboxRedux } from './ReduxFormMUI';
import { ContentDivider } from '../Divider';
import PapperBlock from '../PapperBlock/PapperBlock';


// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

class LoginForm extends React.Component {
  state = {
    showPassword: false
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  render() {
    const {
      error,
      classes,
      handleSubmit,
      pristine,
      submitting
    } = this.props;
    return (
      <div className={classes.formWrap}>
        <PapperBlock whiteBg title="Login" desc="">
          <form onSubmit={handleSubmit}>
            {error && (
              <Typography className={Type.textError} gutterBottom>
                {error}
              </Typography>
            )}
            <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="email"
                  component={TextFieldRedux}
                  placeholder="Your Email"
                  label="Your Email"
                  required
                  validate={[required, email]}
                  className={classes.field}
                />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="password"
                  component={TextFieldRedux}
                  type={this.state.showPassword ? 'text' : 'password'}
                  label="Your Password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  required
                  validate={required}
                  className={classes.field}
                />
              </FormControl>
            </div>
            <div className={classes.btnArea}>
              <FormControlLabel control={<Field name="checkbox" component={CheckboxRedux} />} label="Remember" />
              <Button variant="contained" color="primary" type="submit">
                Continue
                <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} disabled={submitting || pristine} />
              </Button>
            </div>
            <ContentDivider content="OR" />
            <div className={classes.footer}>
              Cannot Login?
              <Button size="small" color="secondary" className={classes.button}>Forgot Password</Button>
              |
              {' '}
              <Button size="small" color="secondary" className={classes.button} href="/register">Register</Button>
            </div>
          </form>
        </PapperBlock>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const LoginFormReduxed = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(LoginForm);

const reducer = 'login';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'usersLogin'])
  }),
)(LoginFormReduxed);

export default withStyles(styles)(FormInit);
