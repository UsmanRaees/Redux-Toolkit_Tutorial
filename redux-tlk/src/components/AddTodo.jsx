import React from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todolist'

const AddTodo = () => {

    const [input,setInput] = React.useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12 flex justify-center items-center'>
        <input type="text"
        className='font-semibold bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        placeholder='Enter a Todo ... 😎'
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        />
        <button
        type='submit'
        className='text-white font-semibold bg-indigo-950 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-900 rounded-lg text-lg'
        >
        Add ⚡ Todo
        </button>
    </form>
  )
}

export default AddTodo