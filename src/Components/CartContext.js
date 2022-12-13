import { productsArray } from "./ProductsStore"

export const CartContext = createContext({
items: [],
getProductQuantity: () => {},
add1ToCart: () => {},
delete1FromCart: () => {},
getTotal: () => {}
})

export function CartMaker({children}) {
    const [cartItems, setCartItems] = useState([])

    function getProductQuantity(id) {
        cartItems.find((item) => {
        if (item.id === id) {return item.quantity}
        else {return 0}})
    }

    function add1ToCart(id) {
        const quantity = getProductQuantity(id)
        if (quantity === 0) {[...cartItems, {id:id, quantity:1}]}
        else {setCartItems(
            setCartItems.map(item => item.id === id ? {...products, quantity: product.quantity + 1} : product)
        )}
    }

    const contextValue = {
        items: cartItems,
        getProductQuantity,
        add1ToCart,
        delete1FromCart,
        getTotal
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}