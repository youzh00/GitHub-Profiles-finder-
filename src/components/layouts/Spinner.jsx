import React from 'react'
import spinner from './assets/spinner 2.gif'

export default function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img src={spinner} alt="Loading..."  width={180} className='tex-center mx-auto'/>
    </div>
  )
}
