import React, { useContext } from 'react'
import { Link } from 'wouter';
import Dog from '../../components/Dog';
import DogsContext  from '../../context/DogsContext'

export default function Detail({params}) {
    const {dogs} = useContext(DogsContext)
    console.log(dogs)
    const dog = dogs.find(singleDog => singleDog.id === params.id)
    console.log(dog)
    return ( 
        <div>
            <h1>Detail</h1>
            <Link to="/"> Regresar </Link>
            <Dog {...dog} />
        </div>
     );
}