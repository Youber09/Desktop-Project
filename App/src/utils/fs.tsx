
import { json } from "@tanstack/react-router/ssr/client";
import { writeTextFile, readTextFile, BaseDirectory, mkdir, create, readDir, writeFile } from "@tauri-apps/plugin-fs";

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

export const createTask = async ({task}: {task: string}) => {

  if (!task) return

  try {
    
    await create(`${Dir}/Tasks.json`,{baseDir: BaseDirectory.LocalData})

  } catch (error) {
    console.log(error)
  }

}