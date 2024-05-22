import React, { useState,useEffect } from 'react';
import Cookies from 'universal-cookie'

function Profile() {
    const [displayUser,setDisplayUser]=useState({
        name:"",
        email:"",
        dob:""
    }); 
    const cookies = new Cookies();
    useEffect(()=>{
        const mail= cookies.get('useremail');
        const cred = localStorage.getItem("userCredentials");
        if(cred && cred.length){
            const UserData = JSON.parse(cred);
            console.log(UserData)
            const userLogin = UserData.find(user=> user.email===mail)
            console.log(userLogin)
            setDisplayUser({...displayUser,name:userLogin.name,email:userLogin.email,dob:userLogin.dob});
            }
    },[])
  return (
    <div className='container' style={{width:"100%"}}>
      <div className='' style={{margin:"0 auto"}}>
            <h3 className='text-center col-lg-6'>Your Details</h3>
            <form className='mt-3'>
            <div className="mb-3 col-lg-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
                <input type="text" className="form-control" id="name" name='name' value={displayUser.name || ''} readOnly />
              </div>
              <div className="mb-3 col-lg-6">
              <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
                <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" value={displayUser.email || ''} readOnly/>
              </div>
              <div className="mb-3 col-lg-6">
              <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
                <input type="date" className="form-control" id="dob" name='dob' value={displayUser.dob || ''} readOnly/>
              </div>
            </form>

           </div>
    </div>
  );
}

export default Profile;
