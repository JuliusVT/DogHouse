import React from 'react'
import {Link} from 'wouter'
import './Dog.css'

export default function Dog({id, title, url}) {
    
    return ( 
        <div className='Dog'>
            <Link to={`/dog/${id}`} className='Dog-link'>
                <h4>{title}</h4>
                <img loading='lazy' src={url} alt={title} />
            </Link>
        </div>
     );
}