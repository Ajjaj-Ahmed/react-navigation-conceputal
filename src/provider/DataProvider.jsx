import React, { createContext, useEffect, useState } from 'react';

export const dataContext = createContext([]);

const DataProvider = ({ children }) => {

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('/users.json')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const [arr, setArr] = useState([12, 45, 76])

    const [text, setText] = useState('Click')
    const sendData = {
        user, setUser, arr, setArr,text,setText
    }
    return (
        <dataContext.Provider value={sendData}>
            {children}
        </dataContext.Provider>
    );
};

export default DataProvider;