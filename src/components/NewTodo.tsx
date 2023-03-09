/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file NewTodo.tsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Thursday, 9th March 2023
 */

import { useRef } from "react";
import '../styles/NewTodo.css';

type NewTodoProp = {
    onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProp> = props =>
{
    const textInputRef = useRef<HTMLInputElement>(null);


    const handlerSubmit = (event: React.FormEvent) =>
    {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={handlerSubmit}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">Add todo</button>
        </form>
    )
}

export default NewTodo