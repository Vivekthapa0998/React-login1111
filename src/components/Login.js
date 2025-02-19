import React,{useState} from 'react';
import SignImj from './SignImj';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
import Cookies from 'universal-cookie'


const Login = () => {
    const [inputVal,setInputVal]=useState({
        email:"",
        password:""
      })
      
      const cookies = new Cookies();
      const auth = useAuth();
      const navigate= useNavigate();
      const [data,setData]= useState([])
    
      const setInput = (e)=>{
        setInputVal({...inputVal,[e.target.name]:e.target.value})
      }
    
      const handleClick = (e)=>{
        e.preventDefault();
        const cred = localStorage.getItem("userCredentials");
    
        const {email,password} = inputVal;
        if(email===""){
          alert("Email field is required")
        }else if(!email.includes("@")){
          alert("Incorrect email")
        }else if(password===""){
          alert("password is required")
        }else if(password.length<=5){
          alert("password length should be greater than 5")
        }
        else{
          if(cred && cred.length){
            const UserData = JSON.parse(cred);
            const userLogin = UserData.find(user=> user.email===email && user.password===password)
            //if(userLogin.length===0)
            if(!userLogin){
                alert("invalid details")
            }
            else{
                
                auth.Login(userLogin.name);
                cookies.set('user',userLogin.name,{path:'/'});
                cookies.set('useremail',userLogin.email,{path:'/'});
                navigate('/');
            }
          }
        }
      }

      const handleBack =()=>{
            navigate(-1);
      } 
    
      return (
        <>
          <div className='container mt-3 '>
            <section className='d-flex justify-content-between'>
              <div className='left_data' style={{width:"100%"}}>
                <h3 className='text-center col-lg-6'>Sign In</h3>
                <form className='mt-3'>
                  <div className="mb-3 col-lg-6">
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" onChange={setInput} placeholder='Your Email'/>
                  </div>
                  <div className="mb-3 col-lg-6">
                    <input type="password" className="form-control" onChange={setInput} id="password" name='password' placeholder='Your Password' />
                  </div>
                  
                  <button type="submit" className="btn btn-primary col-lg-6" style={{background:"rgb(67,185,127)"}} onClick={handleClick}>Login</button>
               
                </form>
                <button className='mt-3 p-2' onClick={handleBack}>Go Back</button>
              </div>
              <SignImj/>
            </section>

            {/* return <Navigate to='/login' state={{path:location.pathname}}> */}
          </div>
        </>
      );
}

export default Login;
