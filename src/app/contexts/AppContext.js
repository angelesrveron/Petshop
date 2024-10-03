"use client";

import { createContext, useState, useContext } from "react";

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); //vacio porque cuando empieza el carrito es 0 en un principio

  const cartLength = cart.length;

  const handleAddToCart = (name, price, image, id, quantity) => {
    const product = {
      name,
      price,
      image,
      id,
      quantity,
    };
    const existingProduct = cart.find((item) => item.id === id);
    if(existingProduct) {
      existingProduct.quantity += quantity;
      return setCart([...cart]);
    }else{
       setCart([...cart, product]);

    }
    //setstate con lo q yo ya tenia de cart + el nuevo producto
  
  };

  const handleRemoveProduct = (id) => {
    const restProducts = cart.filter(product => product.id !== id)
    setCart(restProducts)
  };
  const cartTotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//el reduce sumaliza todo, empieza en 0 y para cada uno de los elementos le va a dar el total, los va a sumar a sus price

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        cartLength,
        handleAddToCart,
        cartTotal,
        handleRemoveProduct
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext tiene que ser usado dentro del provider`);
  }
  return context;
};

export default AppContext;
