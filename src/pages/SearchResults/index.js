import React from 'react'
import ListOfDogs from '../../components/ListOfDogs';
import Spinner from '../../components/Spinner';
import { useDogs } from '../../hooks/useDogs';

export default function SearchResults({params}) {
    const { keyword } = params
    const { dogs, loading } = useDogs({ keyword }) 

    return ( 
      <div className='App-wrapper'>
          <div className='App-main'>
              <div className='App-results'>
                  <h3 className='App-title'>{keyword}</h3>
                  {loading 
                    ? <Spinner />
                    :
                    <ListOfDogs dogs={dogs}/>
                  }
              </div>
          </div>
      </div>
     );
}