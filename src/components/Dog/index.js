import React from 'react'
import {Link} from 'wouter'

export default function Dog({id, title, url}) {
    
    return ( 
      <div className='group aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 border-2 shadow-lg shadow-green-700 border-green-600 xl:aspect-w-7 xl:aspect-h-8 cursor-pointer'>
        <Link to={`/dog/${id}`}>
            <img className='h-96 w-full object-fill object-center group-hover:opacity-75' loading='lazy' src={url} alt={title} />
        </Link>
      </div>
     );
}