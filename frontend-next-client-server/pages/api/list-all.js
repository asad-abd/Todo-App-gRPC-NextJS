const grpc = require('@grpc/grpc-js')
const messages = require('../../proto/todo_pb')
const services = require('../../proto/todo_grpc_pb')
import { GRPCServerUrl } from '../../utils/Urls'

export default function handler (req, res) {
  const client = new services.TodoServiceClient(
    `${GRPCServerUrl}`,
    grpc.credentials.createInsecure()
  )
  // Get all tasks from your grpc server
  // console.log('---list-all was invoked---')
  let request = new messages.ListTodoRequest()

  return new Promise((resolve, reject) => {
    client.listTodo(request, (err, response) => {
      // here, (in todo_grpc_pb.js) the first letter of the function becomes small (compared to the one in the proto file)
      if (err) {
        console.log(err)
        res.status(400).json(response)
        resolve()
      }
      // console.log(response.array[0])
      res.status(200).json(response.array[0])
      // the above res is what we receive from the grpc server and what we will return to the next js client.
      resolve()
    })
  })
}
