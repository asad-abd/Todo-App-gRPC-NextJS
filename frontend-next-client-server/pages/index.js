import React, { useState, useEffect } from 'react'
import Todo from './App/Todo'
import { GRPCServerUrl } from '../utils/Urls'
import { TasksContextProvider } from '../utils/AppContext'

const grpc = require('@grpc/grpc-js')
const messages = require('../proto/todo_pb')
const services = require('../proto/todo_grpc_pb')

export async function getServerSideProps () {
  let todosSSRprops = []

  // const results = await fetch('http://localhost:3000/api/list-all').then(
  //   response => response.json()
  // )
  // instead of the above REST call, directly call the grpc server:-

  const client = new services.TodoServiceClient(
    `${GRPCServerUrl}`,
    grpc.credentials.createInsecure()
  )

  // Get all tasks from your grpc server
  // console.log('---list-all was invoked in getServerSideProps()---')
  let request = new messages.ListTodoRequest()

  async function fetchAllTodos (todosSSRprops) {
    return new Promise((resolve, reject) => {
      client.listTodo(request, (err, response) => {
        if (err) {
          console.log(err)
          console.log('error occurred while doing getServerSideProps()')
          resolve()
        } else {
          // console.log(response.array)
          let listOfFetchedTodos = response.array[0]
          listOfFetchedTodos.map(todoItem => {
            if (todoItem[1]) {
              // if == true
              todosSSRprops.push({ text: todoItem[0], done: true })
            } else {
              todosSSRprops.push({ text: todoItem[0], done: false })
            }
          })
          resolve()
        }
      })
    })
  }

  const updateTodoSSRprops = await fetchAllTodos(todosSSRprops)

  console.log('todosSSRprops before return')
  console.log(todosSSRprops)

  return {
    // send the information that you want to receive in the above fun wait till data is loadedction as props
    props: { todosSSRprops }
  }
  // Pass data to the page via props
}

function Index ({ todosSSRprops }) {
  const [todosSSR, setTodosSSR] = useState(todosSSRprops)
  console.log(todosSSRprops)
  return (
    <TasksContextProvider value={[todosSSR, setTodosSSR]}>
      <Todo />
    </TasksContextProvider>
  )
}

export default Index
