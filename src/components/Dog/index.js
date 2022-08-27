import React, { useEffect, useState } from 'react'
import {Link} from 'wouter'
import { getImageDog } from '../../services/theDogApi';
import './Dog.css'

export default function Dog({id, title, imageCode}) {
    const [ image, setImage ] = useState("")
    
    const handlerGetImage = (imageId) => {
        if(imageId){
            getImageDog(imageId).then(data => setImage(data));
        }else{
            setImage("")
        }
    }

    useEffect(() => {
        handlerGetImage(imageCode)
    },[imageCode])

    return ( 
        <div className='Dog'>
            <Link to={`/dog/${id}`} className='Dog-link'>
                <h4>{title}</h4>
                <img loading='lazy' src={image} alt={title} />
            </Link>
        </div>
     );
}