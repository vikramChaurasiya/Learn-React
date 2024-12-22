import React from "react"
import {useDispatch} from 'react-redux'
import authService from '../../Appwrite/auth'
import {logout} from '../../Store/authSlice'
export default function Logoutbtn(){
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
    return(
       <button className=" inline-blockm px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ">Logout</button>
    )
}