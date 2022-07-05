import { createContext, useContext } from 'react'

const TasksContext = createContext()
export const TasksContextProvider = TasksContext.Provider
export const useTodoSSR = () => useContext(TasksContext)
