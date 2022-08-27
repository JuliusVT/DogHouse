import React, { useEffect, useState } from 'react'
import { searchDogs }  from '../../services/theDogApi';
import ListOfDogs from '../../components/ListOfDogs';

export default function Home() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        searchDogs().then(data => setDogs(data))
    }, [])
    return ( 
        <div className='App-wrapper'>
            <div className='App-main'>
                <div className='App-results'>
                    <h3 className='App-title'>Última búsqueda</h3>
                    <ListOfDogs dogs={dogs}/>
                </div>
            </div>
        </div>
     );
}
