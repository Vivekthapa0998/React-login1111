import React,{useState} from 'react';

const TodoInput = (props) => {
    const [inputText,setText] = useState(''); 
  
    const handleClick = ()=>{
      props.addTask(inputText);
      setText('');
  
    }
  
    const handleKeypress = (e)=>{
      if(e.keyCode === 13){
          props.addTask(inputText);
          setText('');
      }
    }
  return (
    <div className='input-container'>
        <input type='text' className='input-box-todo' placeholder='Enter your task' value={inputText} onChange={(e)=> setText(e.target.value)} onKeyDown={handleKeypress}></input>
        <button className='add-btn' onClick={handleClick}>+</button>
        
    </div>
  );
}

export default TodoInput;
