import grpc
import concurrent
from concurrent import futures

import todo_pb2
import todo_pb2_grpc
import Utils.Urls

class TodoServiceServicer(todo_pb2_grpc.TodoServiceServicer):
  global TodoDB # Dict to store the Todos # instead use array of dicts
  TodoDB = {"sampleT": True}
  
  TodoDB["sampleF"] = False

  def CreateTodo(self, request, context):
    # we should be receiving the message in the same format as we sent it - as specified in the rpc request messages.
    print('we got: ')
    print(request)

    # validation - in future. since if not set, a default value is sent **

    Item = request.item
    
    # add a default status of not completed to it.
    TodoDB[Item] = False  # ask in the frontend ** future
    
    # return a response as specified in the rpc response messages.
    response = todo_pb2.CreateTodoResponse()
    response.todo.item = Item
    response.todo.status = TodoDB[Item] 
    
    # return response to client
    print(response)
    return response

  def GetTodo(self, request, context):
    print("hello")

  ## Function to return all todos
  def ListTodo(self, request, context):
    # we should be receiving the message in the same format as we sent it - as specified in the rpc request messages.
    print('we got (to list all todos): ')
    print(request)
    
    # return a response as specified in the rpc response messages.
    response = todo_pb2.ListTodoResponse()
    
    # iterate over the dict
    for Item, Status in TodoDB.items():
      response.todos.add(item = Item, status = Status)

    # return response to client
    print(response)
    return response

  ## Function to delete a todo
  def DeleteTodo(self, request, context):
    # we should be receiving the message in the same format as we sent it - as specified in the rpc request messages.
    print('we got (to delete todo): ')
    print(request)
    
    Item = request.item
    # remove the requested item from the DB
    TodoDB.pop(Item)

    # return a response as specified in the rpc response messages.
    response = todo_pb2.DeleteTodoResponse()

    # return response (empty) to client
    print(response)
    return response

  # Note: currently, a new item can also be added through this function, modify to add error later
  def UpdateTodo(self, request, context):
    # we should be receiving the message in the same format as we sent it - as specified in the rpc request messages.
    print('we got: ')
    print(request)

    Item = request.item
    Status = request.status

    # CHECK IF Item exists in the DB (do later)
    # ..
    # ..

    # update the status 
    if Status:  # faster checking than using '==' or 'if var is true/false'
      TodoDB[Item] = True
    else:
      TodoDB[Item] = False
    # return a response as specified in the rpc response messages.
    response = todo_pb2.UpdateTodoResponse()
    
    # return response to client
    print(response)
    return response

def main():
  server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
  todo_pb2_grpc.add_TodoServiceServicer_to_server(TodoServiceServicer(), server)
  print(f'Server Started. Listening on port {Utils.Urls.GRPCServerPort}') 
  server.add_insecure_port(f'[::]:{Utils.Urls.GRPCServerPort}')
  server.start()
  server.wait_for_termination()

main()