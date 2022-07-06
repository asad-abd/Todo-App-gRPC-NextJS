import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/AddCircle'
import DeleteIcon from '@mui/icons-material/Delete'

import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Switch from '@mui/material/Switch'
import Tooltip from '@mui/material/Tooltip'
import { FormGroup, FormControlLabel } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import AddTaskIcon from '@mui/icons-material/AddTask'
import Typography from '@mui/material/Typography'
import axios from 'axios'

import { NextServerUrl } from '../../utils/Urls'

import { useTodoSSR } from '../../AppContext'

const styles = {
  done: {
    textDecoration: 'line-through',
    opacity: '.5',
    display: 'flex',
    width: '100%'
  },
  header: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  main: {
    width: '100%',
    maxWidth: '400px',
    margin: '20px auto'
  },
  card: {
    padding: '20px',
    margin: '20px 0'
  },
  todo: {
    position: 'relative',
    display: 'flex',
    flexFow: 'row',
    alignContent: 'space-between'
  },
  label: {
    display: 'flex',
    width: '100%'
  },
  divider: {
    position: 'absolute',
    width: '100%',
    top: 0
  }
}

const theme = createTheme()

export default function Todo () {
  const [tasks, setTasks] = useTodoSSR()
  const [newTask, setNewTask] = useState('')

  const handleOnTextUpdate = e => {
    // use useRef() **
    setNewTask(e.target.value) // this type is used in search engines
  }

  const handleAddTask = async () => {
    // let taskList = tasks // DON'T USE IN THIS WAY. This is actually a pointer and doesn't make a deep copy of tasks

    console.log(`${NextServerUrl}/api/add/`)
    // make an axios post request
    let res = axios
      .post(`${NextServerUrl}/api/add/`, {
        // ** have a common variable in a file for both port and url
        item: newTask
      })
      .then(function (response) {
        // handle success
        console.log('response from nexjs backend')
        console.log(response)

        setNewTask('')
        setTasks(prevTasks => {
          return prevTasks.concat({ text: newTask, done: false })
        })

        // note: I've simply modified the state variable after successful post request but we should ideally re-fetch all the items (as done below for update and delete operations) after adding our new task.
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
        console.log('Finally called')
        console.log(NextServerUrl)
      })
  }

  const handleDeleteTask = async taskToDelete => {
    console.log('handleDeleteTask invoked')

    // make an axios post request
    console.log('taskToDelete')
    console.log(taskToDelete)

    console.log('tasks')
    console.log(tasks)

    let itemToDelete = taskToDelete.text

    console.log('itemToDelete')
    console.log(itemToDelete)
    let res = axios
      .post(`${NextServerUrl}/api/delete/`, {
        item: itemToDelete
      })
      .then(function (response) {
        // handle success
        console.log('response from nexjs backend')

        // correct way is to fetch all the data again
        let tasks1 = [] // temp variable to fetch and store data again

        let res1 = axios
          .get(`${NextServerUrl}/api/list-all/`)
          .then(function (response1) {
            // response1 = response1.json()
            console.log(response1.data)
            response1.data.map(todoItem1 => {
              if (todoItem1[1] == 'true') {
                tasks1.push({ text: todoItem1[0], done: true })
              } else {
                tasks1.push({ text: todoItem1[0], done: false })
              }
            })

            setTasks(tasks1) // set the tasks again
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          .finally(function () {
            // always executed
            console.log('re-fetched all the tasks after delete')
          })
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
        console.log('Finally called')
      })
  }

  const handleToggle = async toggledTask => {
    let itemToUpdate = toggledTask.text

    // toggle the task status
    let statusToUpdate = '' + !toggledTask.done
    // note: we are sending the status as a string

    console.log('task To Update')
    console.log(toggledTask)

    console.log('statusToUpdate')
    console.log(statusToUpdate)

    // make an axios post request
    let res = axios
      .post(`${NextServerUrl}/api/update/`, {
        item: itemToUpdate,
        status: statusToUpdate
      })
      .then(function (response) {
        // handle success
        console.log('response from nexjs backend')

        // correct way is to fetch all the data again
        let tasks1 = [] // temp variable to fetch and store data again

        let res1 = axios
          .get(`${NextServerUrl}/api/list-all/`)
          .then(function (response1) {
            // response1 = response1.json()
            console.log(response1.data)
            response1.data.map(todoItem1 => {
              if (todoItem1[1] == 'true') {
                tasks1.push({ text: todoItem1[0], done: true })
              } else {
                tasks1.push({ text: todoItem1[0], done: false })
              }
            })

            setTasks(tasks1) // set the tasks again
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          .finally(function () {
            // always executed
            console.log('re-fetched all the tasks after status update')
          })
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
        console.log('Finally called')
      })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AddTaskIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Todo App
          </Typography>
          <Box
            component='form'
            // onSubmit={handleAddTodo}
            noValidate
            sx={{ mt: 1 }}
          >
            <div id='main' style={styles.main}>
              <header style={styles.header}>
                <TextField
                  label='Add new task'
                  value={newTask}
                  onChange={handleOnTextUpdate}
                />

                <IconButton
                  aria-label='add'
                  variant='raised'
                  color='primary'
                  disabled={!newTask}
                  onClick={handleAddTask}
                >
                  <AddIcon />
                </IconButton>
              </header>
              {typeof tasks != 'undefined' && tasks.length > 0 && (
                <Card style={styles.card}>
                  <FormGroup>
                    {tasks.map((task, index) => (
                      <div key={index} style={styles.todo}>
                        {index > 0 ? <Divider style={styles.divider} /> : ''}
                        <FormControlLabel
                          control={
                            <Switch
                              color='primary'
                              checked={!task.done}
                              onChange={() => handleToggle(task)}
                            />
                          }
                          label={task.text}
                          style={task.done ? styles.done : styles.label}
                        />
                        <Tooltip title='Delete task' placement='top'>
                          <IconButton
                            aria-label='delete'
                            onClick={() => handleDeleteTask(task)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </div>
                    ))}
                  </FormGroup>
                </Card>
              )}
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
