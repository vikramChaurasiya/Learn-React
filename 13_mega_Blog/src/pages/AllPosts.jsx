import React, {useState, useEffect} from 'react'
import appwriteService from "../Appwrite/config"
import { Container, PostCard } from '../Component'

export default function AllPosts(){
    const [Posts, setPosts] = useState([])
    useEffect( () => {}, [])
    appwriteService.getPosts([]).then((posts)=> {
        if(posts){
            setPosts(posts.documents)
        }
    })
    return(
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {Posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}