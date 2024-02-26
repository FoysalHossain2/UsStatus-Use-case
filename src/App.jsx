import { useState } from 'react'
import './App.css'

function App() {

  const [todoItem, setTodoItems] = useState([])

  let todoSave = (e) => {
    e.preventDefault()

    let todoName = e.target.todoName.value
    if (!todoItem.includes(todoName) ) {
       let finalTodoData = [...todoItem,todoName]
       setTodoItems(finalTodoData)
    } else {
      alert('exiting value')
    }

  }

  let list = todoItem.map((value,index)=>(
    <TodoListItems value={value} key={index} indexNumber={index} 
    todoItem={todoItem}
    setTodoItems={setTodoItems}
     />
  ))

  
  return (
    <>   
      <div className=' flex flex-col justify-center items-center'>
        <h1 className='text-2xl mt-[50px] mb-8'>Todo List</h1>
        <form onSubmit={todoSave}>
          <input type="text" name='todoName' className='py-3 bg-slate-300 w-[600px] pl-4 outline-none ' /> 
          <button className='py-3 bg-green-200 px-4' >SAVE</button>
        </form>

        <ul className='w-[670px] pl-4 mt-3 m-0 p-0 list-none ' >
         {list}
        </ul>
      </div>
    </>
  )
}

export default App;

function TodoListItems({value, indexNumber, todoItem, setTodoItems}){

  const [todoCakeData, setTodoCakeData] = useState(false)

  let deletedRow = () => {
   let finalData = todoItem.filter( (v,i) => i !=indexNumber)
   setTodoItems(finalData);
  }


  let CakeData = () => {
    setTodoCakeData(!todoCakeData)
  }


  return(
    <li onClick={CakeData}  className= {`bg-slate-300 py-3 text-left text-[22px] relative mt-4 cursor-pointer ${(todoCakeData) ? 'completeItem' : ''}` }> 
     {indexNumber + 1.} {value}
      <span className='absolute right-3 cursor-pointer' onClick={deletedRow}> &times; </span> 
   </li>
  )
}
