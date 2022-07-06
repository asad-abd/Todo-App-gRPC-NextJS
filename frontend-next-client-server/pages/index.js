import React, { useState, useEffect } from 'react'
import Todo from './App/Todo'
// import TodoApp from './frontend-react/Todo'
import { createGlobalStyle } from './styled/global.style'

import axios from 'axios'
import { TasksContextProvider } from '../AppContext'

export async function getServerSideProps () {
  // Fetch data from API
  // const res = await fetch('http://localhost:3000/api/list-all')
  // const todoSSR = await res.json()
  let todosSSRprops = []

  // let res = await axios
  //   .get('http://localhost:3000/api/list-all')
  //   .then(function (response) {
  //     // handle success
  //     // todosSSRprops = tasks
  //     // console.log('get server side props invoked')
  //     // console.log(response.data[0])
  //     // set the tasks
  //     response.data.map(todoItem => {
  //       if (todoItem[1] == 'true') {
  //         todosSSRprops.push({ text: todoItem[0], done: true })
  //       } else {
  //         todosSSRprops.push({ text: todoItem[0], done: false })
  //       }
  //     })
  //     return { props: { todosSSRprops } }
  //     // setTasks(taskList)
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error)
  //   })
  //   .finally(function () {
  //     // always executed
  //     // console.log(todosSSRprops)
  //   })
  const results = await fetch('http://localhost:3000/api/list-all').then(
    response => response.json()
  )
// ** instead of the above way directly call

  results.map(todoItem => {
    if (todoItem[1] == 'true') {
      todosSSRprops.push({ text: todoItem[0], done: true })
    } else {
      todosSSRprops.push({ text: todoItem[0], done: false })
    }
  })
  console.log(todosSSRprops)
  return {
    // send the information that you want to receive in the above function as props
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
    // <TodoApp />
  )
}

export default Index
