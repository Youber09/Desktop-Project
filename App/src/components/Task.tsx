import Trash from "../assets/Trash"
import { deleteTask } from "../utils/fs"


const Task = ({task,id,setRefresh} : {task: string,id: string, setRefresh: Function}) => {

    

  return (
    <div className="bg-white/10 outline-0 p-[5%] py-[4%] rounded-[1vw] w-[50vw] text-[1.5vw] font-[Outfit] text-white flex justify-between items-center">
       <p className="bg-white/10 p-[2%] rounded-[0.5vw]">{(task.length > 50) ? task.slice(0,49) + `...` : task}</p>
       <div onClick={async () => {
        await deleteTask(id)
        setRefresh((refresh: number) => refresh + 1)
       }} className="p-[0.7vw] px-[1.5vw] bg-red-600 hover:bg-red-700 rounded-[.5vw] cursor-pointer transition-all duration-300 group"><Trash /></div>
       
    </div>
  )
}

export default Task