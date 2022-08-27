import React from 'react'
import Dog from '../Dog'
import './ListOfDogs.css'

export default function ListOfDogs({dogs}) {
    return ( 
       <div className='ListOfDogs'>
            {
                dogs.map(dog => <Dog key={dog.id} id={dog.id} title={dog.name} imageCode={dog.reference_image_id} />)
            }
       </div>
     );
}
