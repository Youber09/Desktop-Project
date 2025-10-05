

const Task = ({task} : {task: string}) => {

    

  return (
    <div className="bg-white/10 outline-0 p-[5%] rounded-[1vw] w-[50vw] text-[1.5vw] font-[Outfit] text-white">
       <p>{task}</p>
    </div>
  )
}

export default Task