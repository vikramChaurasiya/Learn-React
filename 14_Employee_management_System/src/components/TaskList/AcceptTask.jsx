import React from "react";

export default function AcceptTask({data}){
    console.log(data);
    
    return(
        <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl  ">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
                <h4 className="text-sm" >{data.task_date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.task_title} </h2>
            <p className="text-sm">{data.task_description}</p>
            <div className="flex justify-between mt-4 ">
                <button className="bg-green-500 py-1 px-2 text-sm rounded-md">Mark as Completed</button>
                <button className="bg-red-500 py-1 px-2 text-sm rounded-md">Mark as Failed</button>
            </div>
        </div>
    )
}