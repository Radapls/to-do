/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file TodoList.tsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Thursday, 9th March 2023
 */

import React from "react";
import '../styles/TodoList.css';


interface TodoListProps
{
    items: { id: string, text: string }[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props =>
{
    return (
        <ul>
            {props.items.map(todo =>
                <li key={todo.id}>
                    <span> {todo.text}</span>
                    <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button>
                </li>)}
        </ul>
    )
}

export default TodoList;