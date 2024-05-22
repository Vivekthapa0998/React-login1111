// Sidebar.js
import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
import '../SideNav.css';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    const auth= useAuth()
    const cookies = new Cookies();
    const navigate = useNavigate()
    const logoutUser = ()=>{
        cookies.remove('user')
        auth.Logout()
        navigate('/Signup')
    }

  return (
    <div>
        <nav className='nav-side' >
            <ul className='ul-side'>
                <li className='li-side'>
                    <a href='#' className='logo-side a-side'>
                        <img src={process.env.PUBLIC_URL+'/Todoimg.png'} alt='no image' className='img-side' />
                        <span className='nav-item-side span-side'>My Todos</span>
                    </a>
                </li>
                <li className='li-side'>
                <NavLink to='/' className='a-side'>
                        <i className='fas fa-home i-side'></i>
                        <span className='nav-item-side span-side'>Home</span>
                        </NavLink>
                        
                    
                </li>
                <li className='li-side'>
                <NavLink to='/Profile' className='a-side'>
                        <i className='fas fa-user i-side'></i>
                        <span className='nav-item-side span-side'>Profile</span>
                    </NavLink>
                </li>
                <li className='li-side'>
                    <a href='#' className='a-side'>
                        <i className='fas fa-question-circle i-side'></i>
                        <span className='nav-item-side span-side'>Help</span>
                    </a>
                </li>
                <li className='li-side'>
                    <a href='#' className='logout-side a-side'>
                        <i className='fas fa-sign-out-alt i-side'></i>
                        <span className='nav-item-side span-side' onClick={logoutUser}>Logout</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default SideNav;
