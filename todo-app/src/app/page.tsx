'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { TodoObject } from './models/todo'
import {v4 as uuid} from 'uuid';


// Fragment Tax <> </> for using multiple tags
// typescript ko batya ha ye aik functioncomponent ha aur is ko React.FC sy be likh sktay hain.

const Home: React.FunctionComponent=()=> {
  const [todo, setTodo]=useState<string>(''); // <string> use state ko bydefault string rhay kynkay koi aur cheez na dal skay
  const [todos, setTodos] = useState<TodoObject[]> ([]); 
  
  const addTodo=()=>{
    setTodos([{id: uuid(), value: todo, done: false}, ...todos])
    setTodo("");
  }
    
  const markTodoDone = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done }: todo));
  }
    
  
  

  return (
    <>
    <header className='bg-slate-950 p-4'> 
      <h1 className='text-3xl'> Todo App</h1>
    </header>
      <main className='p-4'>
        <input 
         type='text'
         placeholder='Enter a new task'
         className='p-3 rounded mr-5 text-slate-950'
         onChange={(e) => setTodo(e.target.value)} // onchange use kia ah kyn k input main value change hongy
         value={todo}
        />
        <button className='border-2 p-2 rounded' 
        onClick={()=> addTodo()}
        > 
          Add New Task
        </button>
        <ul className='mt-5'> 
        {
          todos.map(todo => (
            <li 
              onClick={() => markTodoDone(todo.id)} //install uuid in new terminal run this command (npm i uuid)  and {import v4 as uuid } from 'uuid'; but ye error day ga uuid aik package ha per next js isko recognize ni krta isko declare krna parya ga aik hack ha yan tsconfig.json main isko aik option ko add krna ha noimplicitany: false, krna parya ga because typescript ka compiler isko pick ni kr rha 
              className={`text-3xl ml-5 cursor-pointer ${todo.done ? 'line-through' : 'no-underline' }`}> 
              {todo.value}
            </li>

          ))
        }
          
        </ul>


      </main>
    </>
  )
}
export default Home