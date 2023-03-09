/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file App.tsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Thursday, 9th March 2023
 */

import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./models/todo.model";

const App: React.FC = () =>
{
  const [ todos, setTodos ] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) =>
  {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text }
    ]);
  };

  const todoDeleteHandler = (todoID: string) =>
  {
    setTodos(prevTodos =>
    {
      return prevTodos.filter(todo => todo.id !== todoID);
    });
  };

  return (

    <div className="App" >
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div >
  );
}


export default App;
