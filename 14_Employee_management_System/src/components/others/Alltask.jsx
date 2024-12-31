import React, { useContext } from "react"
import {AuthContext} from '../../context/AuthProvider'

export default function Alltask(){

    const authData = useContext(AuthContext);
    // console.log(authData.employees);
    

    return(
        <div id="AlltaskList" className="bg-[#1c1c1c] p-5 rounded mt-5 ">

            <div className="bg-red-500 py-2 px-4 mb-2 flex justify-between rounded">
                <h2 className=' text-xl font-bold w-1/5 text-center ' >Employee Name</h2>
                <h3 className=' text-xl font-bold w-1/5 text-center ' >New Task</h3>
                <h3 className=' text-xl font-bold w-1/5 text-center ' >Active Task</h3>
                <h5 className=' text-xl font-bold w-1/5 text-center ' >Completed</h5>
                <h5 className=' text-xl font-bold w-1/5 text-center ' >Failed</h5>
            </div>

            <div className=' '>
                {authData.employees.map(function(elem, idx){
                    return <div key={idx} className="border-2 border-green-600 py-2 px-4 mb-2 flex justify-between rounded">
                        <h2 className=' text-lg font-medium w-1/5 text-center rounded-lg' >{elem.first_name}</h2>
                        <h3 className=' text-lg font-medium w-1/5 text-blue-600 text-center rounded-lg' >{elem.task_number.new_task}</h3>
                        <h5 className=' text-lg font-medium w-1/5 text-yellow-400 text-center rounded-lg' >{elem.task_number.active}</h5>
                        <h5 className=' text-lg font-medium w-1/5 text-green-600 text-center rounded-lg' >{elem.task_number.completed}</h5>
                        <h5 className=' text-lg font-medium w-1/5 text-red-600 text-center rounded-lg' >{elem.task_number.failed}</h5>
                    </div>
                })} 
            </div>

            
        </div>
    )
}