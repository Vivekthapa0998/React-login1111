import React from 'react';
import { useAuth } from './Auth';
import { Navigate} from 'react-router-dom';
import Cookies from 'universal-cookie';

const AuthUser = ({children}) => {
  const auth = useAuth();
  const cookies = new Cookies()
  const userCookie = cookies.get('user')
  //console.log(userCookie);
  if(!userCookie){
    return <Navigate to='/Signup' />
}
  else{
    return children
  }
    
  
  
  

}

export default AuthUser;
