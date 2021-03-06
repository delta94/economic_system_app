import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { green } from '@material-ui/core/colors';

import {
  Checkbox,
  Typography,
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  FormGroup,
} from '@material-ui/core';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    display: 'block',
    margin: `${theme.spacing(3)}px 0`,
  },
  field: {
    margin: `${theme.spacing(3)}px 5px`,
  },
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
});

class Checkboxes extends PureComponent {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
    gilad: true,
    jason: false,
    antoine: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid
          container
          alignItems="flex-start"
          justify="space-around"
          direction="row"
          spacing={3}
        >
          <Grid
            item
            md={3}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Basic usage</Typography>
            <div>
              <Checkbox
                checked={this.state.checkedA}
                onChange={this.handleChange('checkedA')}
                value="checkedA"
              />
              <Checkbox
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
                color="primary"
              />
              <Checkbox value="checkedC" />
              <Checkbox disabled value="checkedD" />
              <Checkbox disabled checked value="checkedE" />
              <Checkbox
                checked={this.state.checkedF}
                onChange={this.handleChange('checkedF')}
                value="checkedF"
                indeterminate
              />
              <Checkbox defaultChecked color="default" value="checkedG" />
            </div>
          </Grid>
          <Grid
            item
            md={5}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Checkbox with label</Typography>
            <Typography className={classes.divider}>Checkbox can also be used with a label description thanks to the FormControlLabel component.</Typography>
            <div>
              <FormGroup row>
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="checkedA"
                    />
                  )}
                  label="Secondary"
                />
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  )}
                  label="Primary"
                />
                <FormControlLabel control={<Checkbox value="checkedC" />} label="Uncontrolled" />
                <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />
                <FormControlLabel
                  disabled
                  control={<Checkbox checked value="checkedE" />}
                  label="Disabled"
                />
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={this.state.checkedF}
                      onChange={this.handleChange('checkedF')}
                      value="checkedF"
                      indeterminate
                    />
                  )}
                  label="Indeterminate"
                />
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={this.state.checkedG}
                      onChange={this.handleChange('checkedG')}
                      value="checkedG"
                      classes={{
                        root: classes.root,
                        checked: classes.checked,
                      }}
                    />
                  )}
                  label="Custom color"
                />
                <FormControlLabel
                  control={
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />
                  }
                  label="Custom icon"
                />
                <FormControlLabel
                  control={(
                    <Checkbox
                      className={classes.size}
                      icon={<CheckBoxOutlineBlankIcon className={classes.sizeIcon} />}
                      checkedIcon={<CheckBoxIcon className={classes.sizeIcon} />}
                      value="checkedI"
                    />
                  )}
                  label="Custom size"
                />
              </FormGroup>
            </div>
          </Grid>
          <Grid
            item
            md={4}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Checkbox in Form Group</Typography>
            <Typography className={classes.divider}>FormGroup is a helpful wrapper used to group selection controls components that provides an easier API.</Typography>
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.gilad}
                        onChange={this.handleChange('gilad')}
                        value="gilad"
                      />
                    )}
                    label="Gilad Gray"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.jason}
                        onChange={this.handleChange('jason')}
                        value="jason"
                      />
                    )}
                    label="Jason Killian"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={this.state.antoine}
                        onChange={this.handleChange('antoine')}
                        value="antoine"
                      />
                    )}
                    label="Antoine Llorca"
                  />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

Checkboxes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkboxes);
