import React, { useEffect, useState } from "react"
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentiaction = true}){
    const navigate= useNavigate();
    const [loader, setLoder] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    useEffect(()=>{
        if(authentiaction && authStatus !==authentiaction){
            navigate("/login")
        }else if(!authentiaction && authStatus !==authentiaction){
            navigate("/")
        }
        setLoder(false)
    },[authStatus,navigate,authentiaction])

    return loader ? <h1>Loading...</h1>: <>{children}</>
}

