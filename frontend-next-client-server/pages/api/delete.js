const grpc = require('@grpc/grpc-js')
const messages = require('../../proto/todo_pb')
const services = require('../../proto/todo_grpc_pb')

// iife
export default function handler (req, res) {
  const client = new services.TodoServiceClient(
    '0.0.0.0:50051',
    grpc.credentials.createInsecure()
  )
  // Get all tasks from your grpc server
  console.log('---create-todo was invoked. \n function handler req:----')
  // console.log(req)
  // fetch the item to create
  let itemToDelete = req.body.item

  let request = new messages.DeleteTodoRequest().setItem(itemToDelete)

  return new Promise((resolve, reject) => {
    client.deleteTodo(request, (err, response) => {
      // here, (in todo_grpc_pb.js) the first letter of the function becomes small (compared to the one in the proto file)
      if (err) {
        console.log(err)
        //return err
        res.status(400).json(response)
        resolve()
      }
      console.log(response)
      res.status(200).json(response.array)
      resolve()
    })
  })
}
