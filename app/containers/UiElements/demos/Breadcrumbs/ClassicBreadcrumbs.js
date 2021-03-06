import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BreadCrumb } from 'ba-components';

import { Typography, Grid } from '@material-ui/core';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  field: {
    margin: '10px',
    position: 'relative'
  },
});

class ClassicBreadcrumbs extends PureComponent {
  render() {
    const { classes } = this.props;
    const location = { pathname: '/grand-parent/parent/children' };
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
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Typography variant="button" className={classes.divider}>Arrow Separator</Typography>
            <div className={classes.field}>
              <BreadCrumb theme="dark" separator=" › " location={location} />
            </div>
          </Grid>
          <Grid
            item
            md={4}
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Typography variant="button" className={classes.divider}>Slash Separator</Typography>
            <div className={classes.field}>
              <BreadCrumb theme="dark" separator=" / " location={location} />
            </div>
          </Grid>
          <Grid
            item
            md={4}
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Typography variant="button" className={classes.divider}>Greater Than Separator</Typography>
            <div className={classes.field}>
              <BreadCrumb theme="dark" separator=" > " location={location} />
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

ClassicBreadcrumbs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClassicBreadcrumbs);
