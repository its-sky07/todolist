import { useState } from 'react'

function App() {
  const [task, settask] = useState([])
  const [newtask, setnewtask] = useState("")
  
  const handleinputchange = (e) => {
    setnewtask(e.target.value)
  }

  const handleaddtask = () => {
    if (newtask == "")
      throw (
        window.alert("pls enter something ")
      )
    settask([...task, newtask])
    setnewtask("")
  }

  const handledeletetask = (index) => {
    const updatedtask = [...task]
    updatedtask.splice(index, 1)
    settask(updatedtask)
  }

  return (
    <div className='h-screen w-full flex justify-center  text-center relative bg-gray-400'>
      <div className='min-h-max w-2/3  p-5 m-8 bg-blue-400 rounded-lg  justify-center text-center absolute'>
        <h1 className='text-2xl'> Todo list</h1>
        <div className='w-full  h-11 flex rounded-lg'>
          <input
            value={newtask}
            autoFocus
            onChange={handleinputchange}
            className=' w-full rounded-lg  h-14 p-7 '
            type='text' placeholder='write here' />
          <button onClick={handleaddtask} className='bg-green-500 w-20 h-14  px-2 rounded-lg mx-2'>Add</button>
        </div>
        <ul className='my-8'>
          {task.map((tsk, index) => (
            <li key={index} className=' w-full p-2  rounded-lg bg-yellow-400 my-3 text-center flex relative'>
              {tsk}
              <button className='right-1 absolute p-0.5 px-1 rounded-lg bg-red-600 '
                onClick={() => handledeletetask(index)}>delete</button>
            </li>))}
        </ul>
      </div>
    </div>
  )
}
export default App
