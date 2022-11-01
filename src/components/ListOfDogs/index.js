import React from 'react'
import Dog from '../Dog'
import { useDogImages } from '../../hooks/useDogImages'
import Spinner from '../Spinner'

export default function ListOfDogs({dogsIds}) {
	const { id , message } = dogsIds
	const { dogs, loading } = useDogImages({ id });
	
	return (
		<>
		{
      loading
      ? 
        <Spinner />
      :
			message 
      ? 
        <p style={{textAlign:'center'}}>{message}</p>
      :
			<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3'>
				{
					dogs.map(dog => <Dog key={dog.id} id={dog.id} title={dog.name} url={dog.url} />)
				}
			</div>
		}
		</>
	 );
}
