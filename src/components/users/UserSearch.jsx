import React, { useContext, useState } from 'react'
import GithubContext from '../../context/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import {SearchUsers} from '../../context/GitHubActions'

export default function UserSearch() {
    const {users,dispatch}=useContext(GithubContext)
    const [text,setText]=useState('')
    const {setAlert}=useContext(AlertContext)

    

    const  handleChange=(e)=>setText(e.target.value)

    const handleSubmit= async(e)=>{
        e.preventDefault()
        if(text ===''){
            setAlert('Please fill the search bar first','error')


        }else{
            dispatch({ type: "setLoading" })
            const items=await SearchUsers(text)
            dispatch({
                type: "GetUsers",
                payload: items,
            });
            setText('')
        }
    }
    const handleClear=()=>{
        dispatch({ type: "ClearItems" })    }
    


    //////////////////////////////////////////////////////////////
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:gris-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form  onSubmit={handleSubmit}>
                <div className='form-control'>
                    <div className="relative">
                        <input 
                        type="text" 
                        className='w-full pr-40 bg-gray-200 input input-lg text-black'
                        placeholder='Search'
                        value={text}
                        onChange={handleChange}
                        />
                        <button type='submit' className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
                            Go
                        </button>
                    </div>
                </div>
            </form>
        </div>
        {users.length > 0 && (
        <div>
            <button className='btn btn-ghost btn-lg' onClick={handleClear}>Clear</button>
         </div>
        )}
       

    </div>
  )
}

