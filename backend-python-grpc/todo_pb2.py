# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: todo.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\ntodo.proto\"$\n\x04Todo\x12\x0c\n\x04item\x18\x01 \x01(\t\x12\x0e\n\x06status\x18\x02 \x01(\t\"!\n\x11\x43reateTodoRequest\x12\x0c\n\x04item\x18\x01 \x01(\t\")\n\x12\x43reateTodoResponse\x12\x13\n\x04todo\x18\x01 \x01(\x0b\x32\x05.Todo\"\x1e\n\x0eGetTodoRequest\x12\x0c\n\x04item\x18\x01 \x01(\t\"&\n\x0fGetTodoResponse\x12\x13\n\x04todo\x18\x01 \x01(\x0b\x32\x05.Todo\"\x11\n\x0fListTodoRequest\"(\n\x10ListTodoResponse\x12\x14\n\x05todos\x18\x01 \x03(\x0b\x32\x05.Todo\"!\n\x11\x44\x65leteTodoRequest\x12\x0c\n\x04item\x18\x01 \x01(\t\"\x14\n\x12\x44\x65leteTodoResponse\"1\n\x11UpdateTodoRequest\x12\x0c\n\x04item\x18\x01 \x01(\t\x12\x0e\n\x06status\x18\x02 \x01(\t\"\x14\n\x12UpdateTodoResponse2\x9b\x02\n\x0bTodoService\x12\x37\n\nCreateTodo\x12\x12.CreateTodoRequest\x1a\x13.CreateTodoResponse\"\x00\x12.\n\x07GetTodo\x12\x0f.GetTodoRequest\x1a\x10.GetTodoResponse\"\x00\x12\x31\n\x08ListTodo\x12\x10.ListTodoRequest\x1a\x11.ListTodoResponse\"\x00\x12\x37\n\nDeleteTodo\x12\x12.DeleteTodoRequest\x1a\x13.DeleteTodoResponse\"\x00\x12\x37\n\nUpdateTodo\x12\x12.UpdateTodoRequest\x1a\x13.UpdateTodoResponse\"\x00\x62\x06proto3')



_TODO = DESCRIPTOR.message_types_by_name['Todo']
_CREATETODOREQUEST = DESCRIPTOR.message_types_by_name['CreateTodoRequest']
_CREATETODORESPONSE = DESCRIPTOR.message_types_by_name['CreateTodoResponse']
_GETTODOREQUEST = DESCRIPTOR.message_types_by_name['GetTodoRequest']
_GETTODORESPONSE = DESCRIPTOR.message_types_by_name['GetTodoResponse']
_LISTTODOREQUEST = DESCRIPTOR.message_types_by_name['ListTodoRequest']
_LISTTODORESPONSE = DESCRIPTOR.message_types_by_name['ListTodoResponse']
_DELETETODOREQUEST = DESCRIPTOR.message_types_by_name['DeleteTodoRequest']
_DELETETODORESPONSE = DESCRIPTOR.message_types_by_name['DeleteTodoResponse']
_UPDATETODOREQUEST = DESCRIPTOR.message_types_by_name['UpdateTodoRequest']
_UPDATETODORESPONSE = DESCRIPTOR.message_types_by_name['UpdateTodoResponse']
Todo = _reflection.GeneratedProtocolMessageType('Todo', (_message.Message,), {
  'DESCRIPTOR' : _TODO,
  '__module__' : 'todo_pb2'
  # @@protoc_insertion_point(class_scope:Todo)
  })
_sym_db.RegisterMessage(Todo)

CreateTodoRequest = _reflection.GeneratedProtocolMessageType('CreateTodoRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATETODOREQUEST,
  '__module__' : 'todo_pb2'
  # @@protoc_insertion_point(class_scope:CreateTodoRequest)
  })
_sym_db.RegisterMessage(CreateTodoRequest)

CreateTodoResponse = _reflection.GeneratedProtocolMessageType('CreateTodoResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATETODORESPONSE,
  '__module__' : 'todo_pb2'
  # @@protoc_insertion_point(class_scope:CreateTodoResponse)
  })
_sym_db.RegisterMessage(CreateTodoResponse)

GetTodoRequest = _reflection.GeneratedProtocolMessageType('GetTodoRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETTODOREQUEST,
  '__module__' : 'todo_pb2'
  # @@protoc_insertion_point(class_scope:GetTodoRequest)
  })
_sym_db.RegisterMessage(GetTodoRequest)

GetTodoResponse = _reflection.GeneratedProtocolMessageType('GetTodoResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETTODORESPONSE,
  '__module__' : 'todo_pb2'
  # @@protoc_insertion_point(class_scope:GetTodoResponse)
  })
_sym_db.RegisterMessage(GetTodoResponse)

ListTodoRequest = _reflection.GeneratedProtocolMessageType('ListTodoRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTTODOREQUEST,
  '__module__' : 'todo_pb2'
  # @@protoc_insertion_point(class_scope:ListTodoRequest)
  })
_sym_db.RegisterMessage(ListTodoRequest)

ListTodoResponse = _reflection.GeneratedProtocolMessageType('ListTodoResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTTODORESPONSE,
  '__module__' : 'todo_pb2'
  # @@protoc_insertion_point(class_scope:ListTodoResponse)
  })
_sym_db.RegisterMessage(ListTodoResponse)

DeleteTodoRequest = _reflection.GeneratedProtocolMessageType('DeleteTodoRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETETODOREQUEST,
  '__module__' : 'todo_pb2'
  # @@protoc_insertion_point(class_scope:DeleteTodoRequest)
  })
_sym_db.RegisterMessage(DeleteTodoRequest)

DeleteTodoResponse = _reflection.GeneratedProtocolMessageType('DeleteTodoResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETETODORESPONSE,
  '__module__' : 'todo_pb2'
  # @@protoc_insertion_point(class_scope:DeleteTodoResponse)
  })
_sym_db.RegisterMessage(DeleteTodoResponse)

UpdateTodoRequest = _reflection.GeneratedProtocolMessageType('UpdateTodoRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATETODOREQUEST,
  '__module__' : 'todo_pb2'
  # @@protoc_insertion_point(class_scope:UpdateTodoRequest)
  })
_sym_db.RegisterMessage(UpdateTodoRequest)

UpdateTodoResponse = _reflection.GeneratedProtocolMessageType('UpdateTodoResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATETODORESPONSE,
  '__module__' : 'todo_pb2'
  # @@protoc_insertion_point(class_scope:UpdateTodoResponse)
  })
_sym_db.RegisterMessage(UpdateTodoResponse)

_TODOSERVICE = DESCRIPTOR.services_by_name['TodoService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _TODO._serialized_start=14
  _TODO._serialized_end=50
  _CREATETODOREQUEST._serialized_start=52
  _CREATETODOREQUEST._serialized_end=85
  _CREATETODORESPONSE._serialized_start=87
  _CREATETODORESPONSE._serialized_end=128
  _GETTODOREQUEST._serialized_start=130
  _GETTODOREQUEST._serialized_end=160
  _GETTODORESPONSE._serialized_start=162
  _GETTODORESPONSE._serialized_end=200
  _LISTTODOREQUEST._serialized_start=202
  _LISTTODOREQUEST._serialized_end=219
  _LISTTODORESPONSE._serialized_start=221
  _LISTTODORESPONSE._serialized_end=261
  _DELETETODOREQUEST._serialized_start=263
  _DELETETODOREQUEST._serialized_end=296
  _DELETETODORESPONSE._serialized_start=298
  _DELETETODORESPONSE._serialized_end=318
  _UPDATETODOREQUEST._serialized_start=320
  _UPDATETODOREQUEST._serialized_end=369
  _UPDATETODORESPONSE._serialized_start=371
  _UPDATETODORESPONSE._serialized_end=391
  _TODOSERVICE._serialized_start=394
  _TODOSERVICE._serialized_end=677
# @@protoc_insertion_point(module_scope)
