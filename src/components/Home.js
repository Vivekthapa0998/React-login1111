import React from 'react';

const Home = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='my-3'>
      <h1>Welcome To Todo App</h1>
      <div>
      <img src={process.env.PUBLIC_URL+'/todo.PNG'} style={{maxWidth:400}}  alt='no image'></img>
      </div>
      </div>
      

       </div>
  );
}

export default Home;
