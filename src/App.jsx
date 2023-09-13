
import './App.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {useState} from 'react'
function App() {
  const [newTask,setnewTask]=useState('');
  const [todoList,settodoList]=useState([]);
  const handleClick=()=>{
    if(newTask.trim()!=='')
    {
      settodoList([...todoList,newTask]);
      setnewTask('');
    }
  }
  const deleteClick=(index)=>{
    const updatedTodoList=[...todoList];
    updatedTodoList.splice(index,1);
    settodoList(updatedTodoList)

  }
  console.log(todoList)
  return (
    

    <div className="app">
      <div className="userInput">
      <input type='text' className='work' placeholder='Enter your work' value={newTask} onChange={(e)=>setnewTask(e.target.value)}/>
      <AddCircleIcon className='icons' onClick={handleClick}/>
      </div>
       <div className="todowork">
         <h1>TODO</h1>
         <hr/>
         {todoList.map((task,index)=>{return(
           <div className="item" key={index}>
           <p>{task}</p>
          
           <DeleteIcon onClick={()=>deleteClick(index)}/>
          </div>
 
         )})}
         

         
       </div>
        
    </div>
  );
}

export default App;
