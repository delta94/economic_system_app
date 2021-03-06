import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors';

import { Typography, Grid, Input, InputLabel, TextField, FormControl } from '@material-ui/core';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    display: 'block',
    margin: `${theme.spacing(3)}px 0`,
    lineHeight: '24px'
  },
  input: {
    margin: theme.spacing(3),
  },
  margin: {
    margin: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    width: 200,
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      backgroundColor: purple[500],
    },
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

class TextFields extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          direction="row"
          spacing={3}
        >
          <Grid
            item
            md={12}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Layout</Typography>
            <Typography className={classes.divider}>TextField, FormControl allow the specification of margin to alter the vertical spacing of inputs. Using none (default) will not apply margins to the FormControl, whereas dense and normal will as well as alter other styles to meet the specification.</Typography>
            <div className={classes.container}>
              <TextField
                label="None"
                id="margin-none"
                defaultValue="Default Value"
                className={classes.textField}
                helperText="Some important text"
              />
              <TextField
                label="Dense"
                id="margin-dense"
                defaultValue="Default Value"
                className={classes.textField}
                helperText="Some important text"
                margin="dense"
              />
              <TextField
                label="Normal"
                id="margin-normal"
                defaultValue="Default Value"
                className={classes.textField}
                helperText="Some important text"
                margin="normal"
              />
            </div>
          </Grid>
          <Grid
            item
            md={12}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Customized Designs</Typography>
            <Typography className={classes.divider}>Here is an example of how you can change the main color of an Input.</Typography>
            <div className={classes.container}>
              <FormControl className={classes.margin}>
                <InputLabel
                  htmlFor="custom-css-input"
                >
                  Custom CSS
                </InputLabel>
                <Input
                  classes={{
                    underline: classes.cssUnderline,
                  }}
                  id="custom-css-input"
                />
              </FormControl>
              <MuiThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label="MuiThemeProvider"
                  id="mui-theme-provider-input"
                />
              </MuiThemeProvider>
              <TextField
                className={classes.divider}
                defaultValue="react-bootstrap"
                label="Bootstrap"
                id="bootstrap-input"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.bootstrapRoot,
                    input: classes.bootstrapInput,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.bootstrapFormLabel,
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
