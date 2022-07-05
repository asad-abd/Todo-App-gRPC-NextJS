const grpc = require('grpc');
const messages = require('./proto/todo_grpc_pb');
const services = require('./proto/todo_pb');

function main() {
  const client = new services.TodoClient(
    'localhost:50051', grpc.credentials.createInsecure()
  );

  const todoRequest = new messages.TodoRequest();
  todoRequest.setScoops(3);
  todoRequest.setFlavor('strawberry');

  client.orderIceCream(iceCreamRequest, function (err, response) {
    if (err) {
      console.log('this thing broke!', err);
    } else {
      console.log('response from python:', response.getMessage());
    }
  })
}

main();