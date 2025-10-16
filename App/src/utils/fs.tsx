
import { writeTextFile, readTextFile, BaseDirectory, mkdir, create, readDir} from "@tauri-apps/plugin-fs";

const Dir = "Todo-app-data";

export const createDirectory = async () => {

  try {

    await mkdir(Dir, {
      baseDir: BaseDirectory.LocalData, recursive:true
    });
    
  } catch (error) {
    console.log(error)
  }

}

export const readTasks = async () => {

  const entries = await readTextFile(`${Dir}/Tasks.json`, { baseDir: BaseDirectory.LocalData });
  const data = await JSON.parse(entries)


  return data

}

const containsJson = async () => {

  const entries : {name: string}[] = await readDir(Dir, {baseDir:BaseDirectory.LocalData})

  let contains = false
  
  for ( let entry of entries) {

    if (entry.name === `Tasks.json`){
      contains = true
      return contains
    }

  }

  return contains

}

const modifyJson = async (newTasks : {Tasks : {task: string, id: string}[]}) => {

  await writeTextFile(`${Dir}/Tasks.json`,
    JSON.stringify(newTasks),
    {baseDir: BaseDirectory.LocalData}
  )

}

const testId = async (id: string) => {

  const data: {Tasks: {task: string, id : string}[]} = await readTasks()

  const filtered = data.Tasks.filter((data) => data.id === id)

  if (!filtered.length){
    return id
  }else{
    return testId(crypto.randomUUID())
  }

}

export const deleteTask = async (key: string) => {

  const data : {Tasks: {task: string, id : string}[]} = await readTasks()

  const newData = data.Tasks.filter(data => data.id !== key)

  await modifyJson({Tasks: newData})

}

export const createTask = async ({Todo}: {Todo: string}) => {

  if (Todo.length < 3) return

  try {

    const contains = await containsJson()

    
   
    if (!contains){

      await create(`${Dir}/Tasks.json`,{baseDir: BaseDirectory.LocalData})

      await writeTextFile(`${Dir}/Tasks.json`,
        JSON.stringify({Tasks: []}),
        {baseDir: BaseDirectory.LocalData}
      )

    }else {

      console.log(`hey`)

      const data: {Tasks: {task: string, id : string}[]} = await readTasks()

      data.Tasks.push({task: Todo,id: (await testId(crypto.randomUUID()))})

      console.log(data)

      await modifyJson(data)

    }
    
    


  } catch (error) {
    console.log(error)
  }

}