import React from 'react';

const TodoList = (props) => {

    const removeTask =()=>{
        props.deleteTask(props.index);
    }
  return (
    <div>
      <li className='list-item'>
         {props.item}
         <span className='icons' >
         <i className="fa-sharp fa-solid fa-trash icon-delete" onClick={removeTask}></i>
         </span>
    </li>
    </div>
  );
}

export default TodoList;
