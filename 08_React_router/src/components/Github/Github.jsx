import { useState } from "react";
import { useEffect } from "react"
import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data = useLoaderData();
    // const [data, setData ] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/vikramchaurasiya')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])


    return(
        <div className=" place-items-center m-4 bg-gray-600 p-3"> 
            <h1 className=" text-white text-3xl mb-2">Github Followers: {data.followers}</h1>
            <img src={data.avatar_url} alt="pick" width={300} />
            <h2 className="text-2xl text-white"> Location: {data.location} </h2>
        </div>
    )
}

export const githubInfoLoder = async () => {
    const response = await fetch('https://api.github.com/users/vikramchaurasiya')
    return response.json()
}