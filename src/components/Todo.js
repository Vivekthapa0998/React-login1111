import React,{useEffect, useState} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import '../App.css';

const Todo = () => {
    const [taskArr,setTaskArr]= useState([]);
   const addTask = (task)=>{
    if(task !=""){
      setTaskArr(prevTaskArr=>{
          const updatedArray = [...prevTaskArr,task];
          localStorage.setItem('tasks',JSON.stringify(updatedArray));
          return updatedArray;
      })
    }

   }

   useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTaskArr(JSON.parse(storedTasks));
    }
  }, []);

   /*useEffect(()=>{
      localStorage.setItem('tasks', JSON.stringify(taskArr))
   },[taskArr])*/

   const addingToLocal=()=>{
    localStorage.setItem('tasks', JSON.stringify(taskArr))
   }

   const deleteTask = (key)=>{
    let newList = [...taskArr];
    newList.splice(key,1);
    setTaskArr(()=>{
      localStorage.setItem('tasks',JSON.stringify(newList))
      return [...newList];
    })
    //setTaskArr([...newList]);
    //addingToLocal()
   }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addTask={addTask}></TodoInput>
        <h1 className='app-heading'>TODO</h1>
        <hr/>
        {
          taskArr.map((item,i)=>{
            return(
              <TodoList item={item} key={i} index={i} deleteTask={deleteTask}/>
            )
          })
        }
      </div>      
    </div>
  );
}

export default Todo;
