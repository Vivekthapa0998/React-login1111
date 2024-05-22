import React from 'react';
import { createContext,useContext,useState } from 'react';
import Cookies from 'universal-cookie';

const AuthContext = createContext();
/*const AuthContext = createContext({
    user: null,
    Login: () => {},
    Logout: () => {}
  });*/
export const AuthProvider = ({children}) => {
    const cookies = new Cookies();
    const [user,setUser]= useState(()=>{
        const initialValue=cookies.get('user')||"";
        return initialValue;
    })

    const Login = (username)=>{
        setUser(username)
    }

    const Logout = ()=>{
        setUser("")
    }
  return (
    <AuthContext.Provider value={{user,Login,Logout}}>
        {children}
    </AuthContext.Provider>
  );
}

export const useAuth=()=>{
    return useContext(AuthContext)
}


