import React, { useContext } from 'react'; 

// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
// import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
// import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { CartContext } from '../../providers/cart/CartProvider';


import './cart-dropdown.css';

// const CartDropdown = ({ cartItems, history, dispatch }) => (

const CartDropdown = ({ history }) => {

  const { cartItems, toggleHidden } = useContext(CartContext)
  return (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleHidden();
        // dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)}

export default withRouter(CartDropdown)


// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// });

// export default withRouter(connect(mapStateToProps)(CartDropdown));
