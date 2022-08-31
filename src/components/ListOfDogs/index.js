import React from 'react'
import Dog from '../Dog'
import { useDogImages } from '../../hooks/useDogImages'
import './ListOfDogs.css'
import Spinner from '../Spinner'

export default function ListOfDogs({dogsIds}) {
	const { id , message } = dogsIds
	const { dogs, loading } = useDogImages({ id });
	
	return (
		<>
		{
      loading
      ? <Spinner /> 
      :
			message 
      ? <p style={{textAlign:'center'}}>{message}</p>
      :
			<div className='ListOfDogs'>
				{
					dogs.map(dog => <Dog key={dog.id} id={dog.id} title={dog.name} url={dog.url} />)
				}
			</div>
		}
		</>
	 );
}
