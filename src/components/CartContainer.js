import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import { deleteFromCart, increment, decrement, total } from '../actions/cart';

class CartContainer extends React.Component {
  componentDidMount() {
    total();
  }
  render() {
    return (
      <Cart
        cart={this.props.cart}
        deleteFromCart={this.props.deleteFromCart}
        increment={this.props.increment}
        decrement={this.props.decrement}
        total={this.props.total}
      />
    );
  }
}

// We define a function mapStateToProps that defines what part of the state
// (from the redux store) is required as data in this component.
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapActionsToProps = () => {
  return {
    deleteFromCart: deleteFromCart,
    increment: increment,
    decrement: decrement,
    total: total
  };
};

// connect will call the mapStateToProps after an action has been dispatched and handled
export default connect(mapStateToProps, mapActionsToProps())(CartContainer);