
import { writeTextFile, readTextFile, BaseDirectory, mkdir, create, readDir, writeFile } from "@tauri-apps/plugin-fs";

const FILE_NAME = "todos.json";

export const createDirectory = async () => {

  // const entries = await readDir('users', { baseDir: BaseDirectory.AppData });

  // console.log(entries)

  try {

    await mkdir('Todo-App', {
    baseDir: BaseDirectory.LocalData,
  });
    
  } catch (error) {
    console.log(error)
  }
  
  
 
}

export const createAFile = async () => {
  try {
    await writeTextFile(`hey.txt`,`hey`,{baseDir: BaseDirectory.Document})
    console.log(`success`)
  } catch (error) {
    console.log(error)
  }
  
} 