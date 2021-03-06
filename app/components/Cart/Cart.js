import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Type from 'ba-styles/Typography.scss';
import {
  Menu,
  Typography,
  Button,
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
} from '@material-ui/core';
import styles from './cart-jss';


class Cart extends React.Component {
  render() {
    const {
      classes,
      anchorEl,
      close,
      dataCart,
      removeItem,
      totalPrice,
      checkout
    } = this.props;

    const getCartItem = dataArray => dataArray.map((item, index) => (
      <Fragment key={index.toString()}>
        <ListItem>
          <figure>
            <img src={item.get('thumbnail')} alt="thumb" />
          </figure>
          <ListItemText
            primary={item.get('name')}
            secondary={`Quantity: ${item.get('quantity')} Item - USD ${item.get('price') * item.get('quantity')}`}
            className={classes.itemText}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Comments" onClick={() => removeItem(item)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <li>
          <Divider />
        </li>
      </Fragment>
    ));
    return (
      <Menu
        id="cart-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={close}
        className={classes.cartPanel}
      >
        <List
          component="ul"
          subheader={(
            <ListSubheader component="div">
              <ShoppingCartIcon />
              {' '}
Total:
              {' '}
              {dataCart.size}
              {' '}
Unique items in Cart
            </ListSubheader>
          )}
          className={classes.cartWrap}
        >
          {
            dataCart.size < 1 ? (
              <div className={classes.empty}>
                <Typography variant="subtitle1">Empty Cart</Typography>
                <Typography variant="caption">Your shopping items will be listed here</Typography>
              </div>
            ) : (
              <Fragment>
                {getCartItem(dataCart)}
                <ListItem className={classes.totalPrice}>
                  <Typography variant="subtitle1">
                    Total :
                    {' '}
                    <span className={Type.bold}>
$
                      {totalPrice}
                    </span>
                  </Typography>
                </ListItem>
                <li>
                  <Divider />
                </li>
                <ListItem>
                  <Button fullWidth className={classes.button} variant="contained" onClick={() => checkout()} color="secondary">
                    Checkout
                  </Button>
                </ListItem>
              </Fragment>
            )
          }
        </List>
      </Menu>
    );
  }
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired,
  dataCart: PropTypes.object.isRequired,
  anchorEl: PropTypes.object,
  close: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

Cart.defaultProps = {
  anchorEl: null,
};

export default withStyles(styles)(Cart);
