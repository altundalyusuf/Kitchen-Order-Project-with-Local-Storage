import { useState, createContext, useContext, useEffect } from "react";

const RoomContext = createContext();

const currentOrders = JSON.parse(localStorage.getItem('order')) || [];

export const RoomContextProvider = ({ children }) => {

    // Order değişkeni şöyle {roomId: id, order: order} şeklinde bi obje olucak
    const [order, setOrder] = useState(currentOrders);


    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(order));
    }, [order])


    const values = {
        order,
        setOrder,
    }

    return (
        <RoomContext.Provider value={values}>
            {children}
        </RoomContext.Provider>
    )
}

export const useRoom = () => {
    const context = useContext(RoomContext);

    if (context === undefined) {
        throw new Error('useRoom must be used within a RoomContextProvider!');
    }

    return context;
};
