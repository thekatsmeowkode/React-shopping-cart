import { productsArray, getProductData } from "./ProductsStore";
import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  add1ToCart: () => {},
  delete1FromCart: () => {},
  deleteItemFromCart: () => {},
  getTotal: () => {},
  getNumericItemQuantity: () => {}
});
 // {item: id, quantity: ''}
export function CartMaker({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function getNumericItemQuantity(id) {
    let itemQuantity = cartItems.find(item => item.id === id).quantity
    return itemQuantity
  }

  function getProductQuantity(id) {
    const ifQuantity =  cartItems.find((item) => {
        if (item.id === id) {
          return item.quantity;}});
   if (ifQuantity == undefined) {return 0} 
   else {return ifQuantity}
  }

  function add1ToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartItems([...cartItems, { id: id, quantity: 1 }])
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
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
        cartItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
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
    getNumericItemQuantity
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartMaker;
