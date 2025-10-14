import { createFileRoute } from '@tanstack/react-router'
import Task from '../components/Task';
import TaskList from '../components/TaskList';
import { createDirectory, createTask, readTasks } from '../utils/fs';
import { useEffect, useState } from 'react';


export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  createDirectory()

  const [tasks,setTasks] = useState<any>()
  const [refresh, setRefresh] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const data = await readTasks()
      console.log(data)
      setTasks(data)
    }
    fetchData()
  },[refresh])


  const [task,setTask] = useState(``)
  

  return <div className='bg-black w-full p-[5%] min-h-svh h-fit flex justify-center items-between'>


    <form onSubmit={ (e) => {e.preventDefault() ;}} >

      <div className='flex h-[5vw] w-[50vw] justify-center'>
        <input type="text"  placeholder='task' className='bg-white/10 outline-0 p-[5%] rounded-l-[1vw] w-[30vw] text-[1.5vw] font-[Outfit] text-white' onChange={e => setTask(e.target.value)} />
        <button onClick={ async () => {
            await createTask({Todo: task});
            setRefresh(refresh + 1)
          } } type='submit' className='text-white font-[Outfit] font-bold text-[1.5vw] bg-blue-600 px-[5%] rounded-r-[1vw] cursor-pointer hover:bg-blue-700 transition-all duration-200 group'>Add</button>
      </div>

      <ul className=' mt-[5%] flex flex-col justify-center items-center space-y-[2%] w-[50vw]'>
        {
          tasks && tasks.Tasks.map((Todo : {task: string,id : string}) => <Task setRefresh={setRefresh} id={Todo.id} task={Todo.task} key={Todo.id} />)
        }
      </ul>

      

    </form>

  </div>
}
