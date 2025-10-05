import { createFileRoute } from '@tanstack/react-router'
import Task from '../components/Task';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='bg-black w-full h-svh flex justify-center items-center'>


    <form onSubmit={(e) => {e.preventDefault();}} >

      <div className='flex h-[5vw] w-[50vw] justify-center'>
        <input type="text"  placeholder='task' className='bg-white/10 outline-0 p-[5%] rounded-l-[1vw] w-[30vw] text-[1.5vw] font-[Outfit] text-white' />
        <button type='submit' className='text-white font-[Outfit] font-bold text-[1.5vw] bg-blue-600 px-[5%] rounded-r-[1vw] cursor-pointer hover:bg-blue-700 transition-all duration-200 group'>Add</button>
      </div>

      <ul className=' mt-[5%] flex flex-col justify-center items-center space-y-[2%] w-[50vw]'>
        <Task task={`build the portfolio app`} />
      </ul>

      

    </form>

  </div>
}
