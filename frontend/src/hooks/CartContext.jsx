import { useContext, createContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
const [cartProducts, setCartProducts] = useState([]);

const putProductInCart = (product) => {

}

const clearCart = () => {


}

const deleteProductFromCart = (productId) => {

}

const increaseProductQuantity = (productId) => {

}

const decreaseProductQuantity = (productId) => {

}

    return ( <CartContext.Provider value={{ 
        cartProducts, 
        putProductInCart, 
        clearCart, 
        deleteProductFromCart, 
        increaseProductQuantity, 
        decreaseProductQuantity 
        }}>
        {children}
    </CartContext.Provider> 

    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
}