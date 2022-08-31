import React, { useCallback } from 'react'
import ListOfDogs from '../../components/ListOfDogs';
import { useDogs } from '../../hooks/useDogs';
import Spinner from '../../components/Spinner';
import SearchForm from '../../components/SearchForm';

export default function Home() {
    const { dogs, loading } = useDogs() 

    return ( 
        <div className='App-wrapper'>
            <SearchForm />
            <div className='App-main'>
                <div className='App-results'>
                    <h3 className='App-title'>Última búsqueda</h3>
                    {
                        loading 
                            ? <Spinner />
                            :
                            <ListOfDogs dogs={dogs}/>
                    }
                </div>
            </div>
        </div>
     );
}
