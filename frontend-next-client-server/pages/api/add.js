const grpc = require('@grpc/grpc-js')
const messages = require('../../proto/todo_pb')
const services = require('../../proto/todo_grpc_pb')
import { GRPCServerUrl } from '../../utils/Urls'

export default function handler (req, res) {
  //create a client object and provide endpoint and insecure credentials
  //create grpc req
  //make a request object
  //provide parameters - item
  // client.createTodoService(req)

  const client = new services.TodoServiceClient(
    `${GRPCServerUrl}`,
    grpc.credentials.createInsecure()
  )
  // Get all tasks from your grpc server
  console.log('---create-todo was invoked. \n function handler req:----')
  // console.log(req)
  // fetch the item to create
  let itemToCreate = req.body.item

  let request = new messages.CreateTodoRequest().setItem(itemToCreate)

  return new Promise((resolve, reject) => {
    client.createTodo(request, (err, response) => {
      // here, (in todo_grpc_pb.js) the first letter of the function becomes small (compared to the one in the proto file)
      if (err) {
        console.log(err)
        // return err
        res.status(400).json(response)
        resolve()
      } else {
        // console.log(response)
        res.status(200).json(response.array)
        resolve()
      }
    })
  })
}
