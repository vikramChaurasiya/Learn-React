import React,{useContext} from "react";
import UserContext from "../Context/UserContext";

export default function Profile(){
    const {user} = useContext(UserContext);
    // using UserContext data is send in UI 
    if(!user) return <div>Please Login </div>
    
    return <div> 
                Welcome {user.username} 
                
                </div>
    
}