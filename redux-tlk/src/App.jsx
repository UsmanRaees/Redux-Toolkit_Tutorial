import React from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

const App = () => {
  return (
    <div>
      <div className='flex justify-center mt-6'><u className='text-stone-800'><h1 className=' p-1 font-bold text-3xl bg-slate-300 border rounded-xl'>Todo App Using Redux Toolkit</h1></u></div>
      <AddTodo/>
      <Todo/>
    </div>
  )
}

export default App