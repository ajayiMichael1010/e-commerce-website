import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cartItem, setCartItem] = useState({});
    const [cartTotalItems, setCartTotalItems] = useState("");
    const [authenticatedUser , setAuthenticatedUser] = useState(null);

    return (
        <MyContext.Provider value={{isModalOpen, setIsModalOpen ,cartItem, setCartItem,cartTotalItems, setCartTotalItems,authenticatedUser , setAuthenticatedUser}}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyContextProvider };
