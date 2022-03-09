import React, { useEffect, useState } from 'react'
import Spinner from '../layouts/Spinner'
import UserItem from './UserItem'

export default function UserResults() {
    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(true)

    const githubURL="https://api.github.com"
    const githubTOKEN="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"

    useEffect(()=>{
        
            fetchUsers()
        
    },[]
    )
    const fetchUsers=async ()=>{
        const response =await fetch(`${githubURL}/users`,{
            headers:{
                Authorization:`token: ${githubTOKEN}`
            }
        })
        const data=await response.json()
        setUsers(data)
        setLoading(false)
    }
    if(!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4
            lg:grid-cols-3 md:grid-cols-2'>
                    {users.map((user)=>(
                            <UserItem key={user.id} user={user}/>
                    ))}
        
            </div>
          )

    }else{
        return (
           <Spinner/>
          )
    }
 
}
