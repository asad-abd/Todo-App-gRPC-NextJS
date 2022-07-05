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
  // class Todo extends React.Component {
  const [tasks, setTasks] = useTodoSSR()
  const [newTask, setNewTask] = useState('')
  const [changesMade, setChangesMade] = useState(0)

  const handleChanges = e => {
    setNewTask(e.target.value)
  }

  const handleOnTextUpdate = e => {
    setNewTask(e.target.value)
  }

  const handleAddTask = async () => {
    // setChangesMade(setChangesMade + 1)
    console.log('changesMade')
    let taskList = tasks
    // make an axios post request
    let res = axios
      .post('http://localhost:3000/api/add/', {
        item: newTask
      })
      .then(function (response) {
        // handle success
        console.log('response from nexjs backend')
        console.log(response)
        taskList.push({ text: newTask, done: false })

        setTasks(taskList)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
        console.log('Finally called')
        // setHook(response.data);
      })
    // if successful
    //taskList.push({ text: newTask, done: "false" })

    // update the taskslist to re-render
    // setTasks(taskList)
    setNewTask('')
  }

  const handleDeleteTask = taskToDelete => {
    console.log('handleDeleteTask invoked')
    let taskList = tasks
    // make an axios post request

    // if successful
    taskList.splice(taskList.indexOf(taskToDelete), 1)

    // update the taskslist to re-render
    setTasks(taskList)
    setNewTask('')
  }

  const handleToggle = toggledTask => {
    let taskList = tasks
    // make an axios post request
    console.log(toggledTask)
    console.log(taskList)
    taskList[taskList.indexOf(toggledTask)].done = !taskList[
      taskList.indexOf(toggledTask)
    ].done

    // update the taskslist to re-render
    setTasks(taskList)
    setNewTask('')
  }

  // onTextUpdate = e => {
  //   this.setState({ newTask: e.target.value });
  // };

  // addTask = () => {
  //   let { tasks, newTask } = this.state;
  //   tasks.push({ text: newTask, done: false });
  //   this.setState({ tasks: tasks, newTask: "" });
  // };

  // deleteTask = task => {
  //   let { tasks } = this.state;
  //   tasks.splice(tasks.indexOf(task), 1);
  //   this.setState({ tasks: tasks, newTask: "" });
  // };

  // toggle = task => {
  //   let { tasks } = this.state;
  //   tasks[tasks.indexOf(task)].done = !tasks[tasks.indexOf(task)].done;
  //   this.setState({ tasks: tasks, newTask: "" });
  // };
  // console.log(tasks)
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
                  onClick={() => {
                    setChangesMade(changesMade + 1)
                    handleAddTask()
                  }}
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
                              onChange={() =>
                                /*console.log(
                                    task
                                  )*/ handleToggle(
                                  task
                                )
                              }
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

//   export default Todo;

// const Todo = () => {

// 	const [item, setItem] = useState("");
// 	const [newItem, setNewItem] = useState([]);

// 	const firstEvent = (event) => {
// 		setItem(event.target.value);
// 	}

// 	const secondEvent = () => {

// 		setNewItem((prev)=>{
// 			return [...prev, item]
// 		});

// 		setItem("");

// 	}

// 	const thirdEvent = () => {
// 		setNewItem([]);
// 	}

// 	return(
// 		<div>
// 			<br />
// 			<br />
// 			<div className="childOne">
// 				<input type="text" value={item} placeholder="Add a task" onChange={firstEvent} />
// 				<Button className="AddBtn" onClick={secondEvent}>
// 					<AddIcon />
// 				</Button>
// 				<br />
// 				<br />
// 				<ul className="textFont">
// 					{
// 						newItem.map((val) => {
// 							return <li> {val} </li>;
// 						})
// 					}
// 				</ul>
// 			</div>
// 			<br />
// 			<br />
// 			<div className="childTwo">
// 				<Button className="delBtn" onClick={thirdEvent}>
// 					<DeleteIcon />Delete All
// 				</Button>
// 			</div>
// 		</div>
// 	);
// }

// export default Todo;
