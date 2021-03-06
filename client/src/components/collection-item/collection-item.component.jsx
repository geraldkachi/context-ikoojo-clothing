import React, {useContext} from 'react';
import { CartContext } from '../../providers/cart/CartProvider';

// import { connect } from 'react-redux';
// import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.css';

// const CollectionItem = ({ item, addItem }) => {
const CollectionItem = ({ item }) => {

  const { addItem } = useContext(CartContext)
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  )
}

export default CollectionItem
// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItem(item))
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(CollectionItem);
