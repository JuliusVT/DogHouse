import React, { useEffect, useState } from 'react'
import { getImageDog }  from '../../services/theDogApi';
import Dog from '../Dog'
import './ListOfDogs.css'

export default function ListOfDogs({dogs}) {
    const { id , message } = dogs
    const [dogImages, setDogImages] = useState([]);
    useEffect(() => {
        if(id)
        {
            getImageDog(id).then(data => setDogImages(data))
        }
    }, [id])
    return ( 
        <>
        {   
            message ?
            <p style={{textAlign:'center'}}>{message}</p>:
            <div className='ListOfDogs'>
                {
                    dogImages.map(dog => <Dog key={dog.id} id={dog.id} title={dog.name} url={dog.url} />)
                }
            </div>
        }
        </>
     );
}
