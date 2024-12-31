import React, { useState } from "react";


export default function Login({handleLogin}){
    const[email, setEmail] = useState('')
    const[password,setPassword] =useState('')

    const submitHandler = (e)=>{
        e.preventDefault();
        handleLogin(email,password)

        // console.log("email is: ", email);
        // console.log("password is: ", password);
        setEmail("");
        setPassword("");
    }
    

    return(
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-emerald-600 rounded-xl p-20">
                <form  
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                className='flex flex-col items-center justify-center'
                >
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required 
                    className='outline-none bg-transparent border-2 rounded-full border-emerald-600 font-medium text-xl  py-3 px-5 placeholder:text-gray-400' type="email" placeholder="Enter your email" 
                    />
                    <input 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required 
                    className=' outline-none bg-transparent border-2 rounded-full border-emerald-600 font-medium text-xl py-3 px-5 placeholder:text-gray-400 mt-3' type="password" placeholder="Enter your password" 
                    />
                    <button className=' outline-none rounded-full hover:bg-emerald-700 font-bold bg-emerald-600 text-lg py-2 px-8 w-full  mt-5'>Login</button>
                </form>

            </div>
        </div>
    )
}