import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function TodoList() {
    let [Todos , setTodos] = useState([{task:"sample task",id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");
    
    let addNewTask= () =>{
        setTodos((prevTodos) =>{
            return [...Todos, {task: newTodo, id:uuidv4()}];
        });
        setNewTodo("");
    }

    let updateTodoValue=(Event)=>{
        setNewTodo(Event.target.value);
    }

    let deleteTodo = (id) => {
       setTodos((prevTodos) =>Todos.filter((prevTodos)=> prevTodos.id !=id));
        
    }

    return (
        <div>
            <input 
            placeholder="Add a task"
            value={newTodo}
            onChange={updateTodoValue}
            ></input>
            <br />
            <button onClick={addNewTask}>Add task</button>
            <br />
            <br />
            <br />
            <hr />
            <h4>Todo List</h4>
            <ul>
                {
                    Todos.map((todo)=>(
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp; &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}