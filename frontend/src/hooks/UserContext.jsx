import { createContext, useContext, useState, useEffect, use } from "react";


const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});

    const putUserData = (userInfo) => {
        setUserInfo(userInfo);

        localStorage.setItem('kftche:userData', JSON.stringify(userInfo));

    }

    const logout = () => {
        setUserInfo({});
        localStorage.removeItem('kftche:userData');
    }

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem('kftche:userData');

        if (userInfoLocalStorage) {
            setUserInfo(JSON.parse(userInfoLocalStorage));
        }
    }, []);

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
