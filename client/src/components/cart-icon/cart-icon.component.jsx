import React, { useContext } from 'react';

// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
// import { toggleCartHidden } from '../../redux/cart/cart.actions';


import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.css';
import {CartContext} from '../../providers/cart/cartProvider';

// const CartIcon = ({ toggleCartHidden, itemCount }) => {

const CartIcon = () => {

  const { toggleHidden, cartItemsCount } = useContext(CartContext)

  return (
  // <div className='cart-icon' onClick={toggleCartHidden}>
  <div className='cart-icon' onClick={toggleHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{cartItemsCount}</span>
  </div>
)}

export default CartIcon

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CartIcon);
