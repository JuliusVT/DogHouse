import React from 'react'
import ListOfDogs from '../../components/ListOfDogs';
import Spinner from '../../components/Spinner';
import { useDogs } from '../../hooks/useDogs';

export default function SearchResults({params}) {
    const { keyword } = params
    const { dogs, loading } = useDogs({ keyword }) 

    return ( 
      <div>
        <h3 className='App-title'>Buscar: {keyword}</h3>
        {loading 
          ? <Spinner />
          :
          <ListOfDogs dogsIds={dogs}/>
        }
      </div>
     );
}