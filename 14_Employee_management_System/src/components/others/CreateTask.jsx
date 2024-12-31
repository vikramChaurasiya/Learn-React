import React, { useState } from "react";
import NewTask from "../TaskList/NewTask";
import FailedTask from "../TaskList/FailedTask";
import CompleteTask from "../TaskList/CompleteTask";
import { AuthContext } from "../../context/AuthProvider";
export default function CreateTask(){

    // const [userData, setUserData] = useContext(AuthContext)

    const [task_title, setTask_title] = useState('');
    const [task_description , setTask_description] = useState('');
    const [task_date, setTask_date] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');

    const [new_task, setNew_task] = useState({});

    const submitHandler= (e) =>{
        e.preventDefault()
        
        setNew_task({task_title, task_description, task_date, category, active:false, new_task:true, failed: false, completed:false });
        
        const data = JSON.parse(localStorage.getItem('employees'));
        
        data.forEach(function(elem){
            if(asignTo == elem.first_name){
                elem.tasks.push(new_task);
                elem.task_number.new_task = elem.task_number.new_task + 1
            }
        })

        localStorage.setItem('employees',JSON.stringify(data));

        setAsignTo('');
        setCategory('');
        setTask_date('');
        setTask_description('');
        setTask_title('');

        
        
    }
    

    return(
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
            <form onSubmit={(e)=>{
                submitHandler(e)
                }} 
                className="flex flex-wrap w-full items-center justify-between"
            >
                <div className="w-1/2">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                        <input 
                        value={task_title}
                        onChange={(e)=>{
                            setTask_title(e.target.value)
                        }}
                        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"type="text" placeholder="make a UI design" />
                    </div>
                    <div> 
                        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                        <input 
                        value={task_date}
                        onChange={(e)=>{
                            setTask_date(e.target.value)
                        }}
                        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5" >Assign To</h3>
                        <input
                        value={asignTo}
                        onChange={(e)=>{
                            setAsignTo(e.target.value)
                        }} 
                        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="employee name" />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                        <input
                        value={category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}
                        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design, dev etc" />
                    </div>
                </div>
                <div className="w-1/2">
                    <h3 className="text-sm text-gray-300 mb-0.5">Description"</h3>
                    <textarea
                    value={task_description}
                    onChange={(e)=>{
                        setTask_description(e.target.value)
                    }} 
                    className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"name="" id="" cols='30' rows='10'></textarea>
                    <button className="bg-emerald-500 hover:bg-emerald-600 hover:font-semibold px-5 py-3 rounded text-xl mt-4 w-full ">Create Task</button>
                </div>
            </form>
        </div>
    )}