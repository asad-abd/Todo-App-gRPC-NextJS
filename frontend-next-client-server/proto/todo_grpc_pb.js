// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var todo_pb = require('./todo_pb.js');

function serialize_CreateTodoRequest(arg) {
  if (!(arg instanceof todo_pb.CreateTodoRequest)) {
    throw new Error('Expected argument of type CreateTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateTodoRequest(buffer_arg) {
  return todo_pb.CreateTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateTodoResponse(arg) {
  if (!(arg instanceof todo_pb.CreateTodoResponse)) {
    throw new Error('Expected argument of type CreateTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateTodoResponse(buffer_arg) {
  return todo_pb.CreateTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteTodoRequest(arg) {
  if (!(arg instanceof todo_pb.DeleteTodoRequest)) {
    throw new Error('Expected argument of type DeleteTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DeleteTodoRequest(buffer_arg) {
  return todo_pb.DeleteTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteTodoResponse(arg) {
  if (!(arg instanceof todo_pb.DeleteTodoResponse)) {
    throw new Error('Expected argument of type DeleteTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DeleteTodoResponse(buffer_arg) {
  return todo_pb.DeleteTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetTodoRequest(arg) {
  if (!(arg instanceof todo_pb.GetTodoRequest)) {
    throw new Error('Expected argument of type GetTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetTodoRequest(buffer_arg) {
  return todo_pb.GetTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetTodoResponse(arg) {
  if (!(arg instanceof todo_pb.GetTodoResponse)) {
    throw new Error('Expected argument of type GetTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetTodoResponse(buffer_arg) {
  return todo_pb.GetTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListTodoRequest(arg) {
  if (!(arg instanceof todo_pb.ListTodoRequest)) {
    throw new Error('Expected argument of type ListTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListTodoRequest(buffer_arg) {
  return todo_pb.ListTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListTodoResponse(arg) {
  if (!(arg instanceof todo_pb.ListTodoResponse)) {
    throw new Error('Expected argument of type ListTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListTodoResponse(buffer_arg) {
  return todo_pb.ListTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateTodoRequest(arg) {
  if (!(arg instanceof todo_pb.UpdateTodoRequest)) {
    throw new Error('Expected argument of type UpdateTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateTodoRequest(buffer_arg) {
  return todo_pb.UpdateTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateTodoResponse(arg) {
  if (!(arg instanceof todo_pb.UpdateTodoResponse)) {
    throw new Error('Expected argument of type UpdateTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateTodoResponse(buffer_arg) {
  return todo_pb.UpdateTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoServiceService = exports.TodoServiceService = {
  createTodo: {
    path: '/TodoService/CreateTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.CreateTodoRequest,
    responseType: todo_pb.CreateTodoResponse,
    requestSerialize: serialize_CreateTodoRequest,
    requestDeserialize: deserialize_CreateTodoRequest,
    responseSerialize: serialize_CreateTodoResponse,
    responseDeserialize: deserialize_CreateTodoResponse,
  },
  getTodo: {
    path: '/TodoService/GetTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.GetTodoRequest,
    responseType: todo_pb.GetTodoResponse,
    requestSerialize: serialize_GetTodoRequest,
    requestDeserialize: deserialize_GetTodoRequest,
    responseSerialize: serialize_GetTodoResponse,
    responseDeserialize: deserialize_GetTodoResponse,
  },
  listTodo: {
    path: '/TodoService/ListTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.ListTodoRequest,
    responseType: todo_pb.ListTodoResponse,
    requestSerialize: serialize_ListTodoRequest,
    requestDeserialize: deserialize_ListTodoRequest,
    responseSerialize: serialize_ListTodoResponse,
    responseDeserialize: deserialize_ListTodoResponse,
  },
  deleteTodo: {
    path: '/TodoService/DeleteTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.DeleteTodoRequest,
    responseType: todo_pb.DeleteTodoResponse,
    requestSerialize: serialize_DeleteTodoRequest,
    requestDeserialize: deserialize_DeleteTodoRequest,
    responseSerialize: serialize_DeleteTodoResponse,
    responseDeserialize: deserialize_DeleteTodoResponse,
  },
  updateTodo: {
    path: '/TodoService/UpdateTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.UpdateTodoRequest,
    responseType: todo_pb.UpdateTodoResponse,
    requestSerialize: serialize_UpdateTodoRequest,
    requestDeserialize: deserialize_UpdateTodoRequest,
    responseSerialize: serialize_UpdateTodoResponse,
    responseDeserialize: deserialize_UpdateTodoResponse,
  },
};

exports.TodoServiceClient = grpc.makeGenericClientConstructor(TodoServiceService);
