import Task from "./Task"


const TaskList = ({number,task} : {number: number, task: string}) => {

  return (
    <>
          {[...Array(number)].map((_, i) => (
        <Task key={i} task={task} />
      ))}
    </>
  )
}

export default TaskList