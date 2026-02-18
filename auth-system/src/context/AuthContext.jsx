import { createContext, useEffect, useState } from "react";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.setItem("user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

    }, [])

    //signUp function
    const signUp = (name, email, password) => {

        const fakeToken = "fake-jwt-token"; // use for fake jwt token since we have any backend facalities

        const newUser = {
            name,
            email,
            password, // demo only . pass handle form backend 
            token: fakeToken,
        }

        localStorage.setItem("user", JSON.stringify(newUser));

        setUser(newUser);
    }

    // login system 

    const login = (email, password) => {

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            setUser(storedUser);
            return true; // login success
        }
        return false // login denaied

    }


    // logout
    const logOut = () => {
        localStorage.removeItem("user");

        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, signUp, login, logOut, }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext




