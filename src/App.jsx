import { useState } from 'react'

function App() {
  const [tasks, settask] = useState([])
  const [newtask, setnewtask] = useState("")

  const handleaddtask = () => {
    if (newtask == "") {
      alert("chutiya hai kya khuch likh to ")
    } else {
      settask([...tasks, newtask])
      setnewtask("")
    }
  }
  const handledeletetask = (index) => {
    let updatedtask = [...tasks]
    updatedtask.splice(index, 1)
    settask(updatedtask)
  }
  return (
    <div className='h-screen w-full flex justify-center  text-center relative  bg-gray-400'>
      <div className='h-5/6 w-2/3  p-5 m-8 bg-blue-400 rounded-lg  overflow-auto justify-center text-center absolute scroll-m-0'>
        <h1 className='text-2xl font-bold text-4lg mb-3' > Todo list</h1>
        <div className='w-full  h-11 flex rounded-lg'>
          <input
            value={newtask}
            autoFocus
            onChange={(e) => setnewtask(e.target.value)}
            className=' w-full rounded-lg font-sans h-14  p-7 '
            type='text' placeholder='write here' />
          <button onClick={handleaddtask} className='bg-green-500 w-20 h-14 hover:font-bold px-2 rounded-lg mx-2'>Add</button>
        </div>
        <div className='cursor-pointer'>
          <ul className='my-8 '>
            {tasks.map((tsk, index) => (
              <li className=' w-full p-2  rounded-lg bg-yellow-300 my-3 text-center flex relative' key={index}>{tsk}
                <button className='right-1 absolute  px-1 hover:font-bold rounded-md bg-red-600 '
                  onClick={handledeletetask}>delete</button></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default App
