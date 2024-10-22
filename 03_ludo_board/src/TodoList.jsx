import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function TodoList() {
    let [Todos , setTodos] = useState([{task:"sample task",id:uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");
    
    let addNewTask= () =>{
        setTodos((prevTodos) =>{
            return [...Todos, {task: newTodo, id:uuidv4(), isDone: false}];
        });
        setNewTodo("");
    }

    let updateTodoValue=(Event)=>{
        setNewTodo(Event.target.value);
    }

    let deleteTodo = (id) => {
       setTodos((prevTodos) =>Todos.filter((prevTodos)=> prevTodos.id !=id));
        
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo)=>{
                return {
                    ...todo,
                    task:todo.task.toUpperCase(),
                };
            })
        );
    };
    
    let UpperCaseOne = (id) =>{
        setTodos((prevTodos) => 
            prevTodos.map((todo)=>{
                if(todo.id == id){
                    return {
                        ...todo,
                        task:todo.task.toUpperCase(),
                    };
                } else{
                    return todo;
                }
            })
        );
        
    }
    let Completed = (id) =>{
        setTodos((prevTodos) => 
            prevTodos.map((todo)=>{
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else{
                    return todo;
                }
            })
        );
        
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
                            <span style={todo.isDone ? {textDecorationLine: "line-through"}: {}}>{todo.task}</span>
                            &nbsp; &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                            <button onClick={()=>Completed(todo.id)}>Completed</button>
                        </li>
                    ))

                }
            </ul>
            <button onClick={upperCaseAll} >UpperCaseAll</button>
        </div>
    );
}