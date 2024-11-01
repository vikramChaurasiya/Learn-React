import { useParams } from "react-router-dom"

export default function User() {
    const {userid} = useParams()
    return (
        <>
            <div className=" text-center bg-gray-600 p-4 text-white text-2xl">User: {userid} </div>
        </>
    )
}