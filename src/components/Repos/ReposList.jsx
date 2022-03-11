import React from 'react'
import RepoItem from './RepoItem'

export default function ReposList({repos}) {

  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
        <div className="card-body">
            <h2 className="text-3xl mt-4 font-bold card-title">Latest Repositories</h2>
        </div>
        {
            repos.map((repo)=>(
                <RepoItem key={repo.id} repo={repo}/>
            ))
        }
    </div>
  )
}
