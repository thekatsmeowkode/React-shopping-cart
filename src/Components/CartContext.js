import { productsArray, getProductData } from "./ProductsStore";
import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  add1ToCart: () => {},
  delete1FromCart: () => {},
  deleteItemFromCart: () => {},
  getTotal: () => {},
});

export function CartMaker({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function getProductQuantity(id) {
    cartItems.find((item) => {
      if (item.id === id) {
        return item.quantity;
      } else {
        return 0;
      }
    });
  }

  function add1ToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      [...cartItems, { id: id, quantity: 1 }];
    } else {
      setCartItems(
        setCartItems.map((item) =>
          item.id === id
            ? { ...products, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function delete1FromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteItemFromCart(id);
    } else {
      setCartItems(
        setCartItems.map((item) =>
          item.id === id
            ? { ...products, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteItemFromCart(id) {
    setCartItems((prevItems) =>
      prevItems.filter((currentItem) => {
        return currentItem.id !== id;
      })
    );
  }

  function getTotal() {
    let totalCost = 0;
    cartItems.map((item) => {
      const productData = getProductData(item.id);
      totalCost += productData.price * item.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartItems,
    getProductQuantity,
    add1ToCart,
    delete1FromCart,
    deleteItemFromCart,
    getTotal,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartMaker;
