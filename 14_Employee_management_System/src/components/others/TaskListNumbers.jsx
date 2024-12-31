import React from "react";
export default function TaskListNumbers({data}){
    return(
        <div className="flex mt-10 justify-between gap-5 ">
            <div className="rounded-xl w-[45%] py-7 px-9 bg-red-400 ">
                <h2 className="text-3xl font-semibold">{data.task_number.new_task}</h2>
                <h3 className="text-xl font-medium">New task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-7 px-9 bg-blue-400 ">
                <h2 className="text-3xl font-semibold">{data.task_number.completed}</h2>
                <h3 className="text-xl font-medium">Completed task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-7 px-9 bg-green-400 ">
                <h2 className="text-3xl font-semibold">{data.task_number.active}</h2>
                <h3 className="text-xl font-medium">Accept task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-7 px-9 bg-yellow-400 ">
                <h2 className="text-3xl font-semibold">{data.task_number.failed}</h2>
                <h3 className="text-xl font-medium">Failed task</h3>
            </div>
        </div>
    )
}