import React from 'react'
import ListOfDogs from '../../components/ListOfDogs';
import { useDogs } from '../../hooks/useDogs';
import Spinner from '../../components/Spinner';

export default function Home() {
    const { dogs, loading , keytitle} = useDogs() 

    return ( 
      <div>
        <h3 className='App-title'>Última búsqueda: { keytitle }</h3>
        {
            loading 
            ? <Spinner />
            :
            <ListOfDogs dogsIds={dogs}/>
        }
      </div>
     );
}
