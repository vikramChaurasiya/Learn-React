import React, { useState } from "react";
import { setLocalStorage , getLocalStorage} from "../../utils/LocalStorage";
export default function Header(props){
    

    

    const logOutUser = ()=>{
        localStorage.setItem('loggedInUser', '');
        props.changeUser('');
        
    }

    return(
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className="text-3xl font-semibold "> Vikram👋</span></h1>
            <button onClick={logOutUser} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm">Logout</button>
        </div>
    )
}