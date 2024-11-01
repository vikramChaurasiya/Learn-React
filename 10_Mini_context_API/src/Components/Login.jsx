import React,{useState,useContext} from "react";
import UserContext from "../Context/UserContext";

export default function Login(){
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const {setUser} = useContext(UserContext);

    const handelSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }

    return(
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name" />
            {" "}
            <input type="text" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" />
            <button onClick={handelSubmit} >Submit</button>
        </div>
    )
}