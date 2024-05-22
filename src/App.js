import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider } from './components/Auth';
import AuthUser from './components/AuthUser';
import About from './components/About';
import Todo from './components/Todo';
import Cookies from 'universal-cookie';
import { useAuth } from './components/Auth';
import { useState, useEffect } from 'react';
import SideNav from './components/SideNav';
import Profile from './components/Profile';

function App() {
  const [userCheck, setUserCheck] = useState("");
  const cookies = new Cookies();
  const auth = useAuth();



  useEffect(() => {
    const val = auth ? auth.user : "";
    setUserCheck(val)
  }, [auth]);

  useEffect(() => {
    const val = auth ? auth.user : "";
    setUserCheck(val)
  }, []);
  /*
  useEffect(() => {
    const val = auth ? auth.user : "";
    setUserCheck(val)
  }, []); */
  //const userCookieValue = cookies.get('user');

  //if (userCheck != null && userCheck != undefined && userCheck!=="") {
  //  if (auth && auth.user !== null && auth.user !== undefined && auth.user !== "") { 
  if (userCheck !== "") {
    return (
      <>


        <div style={{ display: "flex", flexDirection: "column", flex: 1, height: "100vh" }}>

          <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>

            <SideNav/>
            <div style={{
              "width": "100%",

              "overflow": "auto",
            }}>

              <Header />
              <Routes>

                <Route path='/' element={<AuthUser><Home /></AuthUser>} />

                <Route path='/Signup' element={<Signup />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/About' element={<AuthUser><About /></AuthUser>} />
                <Route path='/Todo' element={<AuthUser><Todo /></AuthUser>} />
                <Route path='/Profile' element={<Profile/>}/>
              </Routes>



            </div>
          </div>
        </div>

      </>


    );
  }

  else {
    return (

      <>
        <Header />
        <Routes>

          <Route path='/' element={<AuthUser><Home /></AuthUser>} />

          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/About' element={<AuthUser><About /></AuthUser>} />
          <Route path='/Todo' element={<AuthUser><Todo /></AuthUser>} />
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
      </>



    )
  }

}

export default App;
