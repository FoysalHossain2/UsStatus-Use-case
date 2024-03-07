import React, { useState, useEffect } from 'react'
import { TodoProvider } from './Context'


function App() {

  const [todoS, setTodoS] = useState([])

  const addTodo = (todo) =>{
    setTodoS((perv) => [{id:Date.now(), ...todo}, ...perv])
  }

  const updateTodo = (todo, id) => {
    setTodoS((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deletedTodo = (id) => {
    setTodoS((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodoS((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo, complete: !prevTodo.complete} : prevTodo))
  }


  useEffect(() => {
    const todoS = JSON.parse(localStorage.getItem("todoS"))

    if (todoS && todoS.length > 0 ) {
      setTodoS(todoS)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todoS", JSON.stringify(todoS))
  }, [todoS])
  
  


  return (
    <> 
      <TodoProvider value={{todoS, addTodo, updateTodo, deletedTodo, toggleComplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                <div className="mb-4">
                    {/* Todo form goes here */} 
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {/*Loop and Add TodoItem here */}
                  
                </div>
            </div>
          </div>
      </TodoProvider>
    </>
  )
}

export default App