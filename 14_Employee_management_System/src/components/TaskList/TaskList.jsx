import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

export default function TaskList({data}){
    return(
        <div id="tasklist" className="h-[50%] overflow-x-auto flex ite justify-start gap-5 w-full py-5 flex-nowrap mt-10 ">

            {data.tasks.map((elem, idx)=>{
                if(elem.active){
                    return <AcceptTask key={idx} data={elem} />
                }
                if(elem.new_task){
                    return <NewTask key={idx} data={elem} />
                }
                if(elem.completed){
                    return <CompleteTask key={idx} data={elem} />
                }
                if(elem.failed){
                    return <FailedTask key={idx} data={elem} />
                }
            })}
            
        </div>
    )
} 