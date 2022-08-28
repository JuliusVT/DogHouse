import React, { useEffect, useState } from 'react'
import { searchDogs }  from '../../services/theDogApi';
import ListOfDogs from '../../components/ListOfDogs';

export default function SearchResults({params}) {
    const { keyword } = params
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        searchDogs({ keyword: keyword }).then(data => {
            setDogs(data)
            if(data.id){
                localStorage.setItem('lastKeyword',keyword)
            }
        })
    }, [keyword])

    return ( 
        <div className='App-wrapper'>
            <div className='App-main'>
                <div className='App-results'>
                    <h3 className='App-title'>{keyword}</h3>
                    {  
                        <ListOfDogs dogs={dogs}/>
                    }
                </div>
            </div>
        </div>
     );
}