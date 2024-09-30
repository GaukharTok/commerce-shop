import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const TAX_RATE = 0.1; // 10%

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantityInCart;
    }, 0);
  };

  const calculateTotalPrice = () => {
    const subtotal = calculateSubtotal();
    const tax = subtotal * TAX_RATE;
    return subtotal + tax;
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item) => {
          const itemTotal = (item.price * item.quantityInCart).toFixed(2); // Сумма для текущего товара
          return (
            <div key={item.id} className="cart-item">
              <h3>{item.title}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <div className="quantity">
                <p>Quantity:</p>
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantityInCart - 1)
                  }
                >
                  -
                </button>
                {item.quantityInCart}
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantityInCart + 1)
                  }
                >
                  +
                </button>
              </div>
              <p>Total: ${itemTotal}</p> {/* Общая сумма для товара */}
              <button
                className="remove"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          );
        })
      )}
      <h3>Subtotal: ${calculateSubtotal().toFixed(2)}</h3>
      <h3>Tax (10%): ${(calculateSubtotal() * TAX_RATE).toFixed(2)}</h3>
      <h3>Total Price (including tax): ${calculateTotalPrice().toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
