import React, { useEffect, useState } from 'react'
import ListOfDogs from '../../components/ListOfDogs';
import { useLocation } from 'wouter';
import { useDogs } from '../../hooks/useDogs';
import Spinner from '../../components/Spinner';

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [_, pushLocation] = useLocation()
    const { dogs, loading } = useDogs() 

    const handleSubmit = evt =>{
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt =>{
        evt.preventDefault()
        setKeyword(evt.target.value)
    }

    return ( 
        <div className='App-wrapper'>
            <form onSubmit={handleSubmit}>
                <button>Buscar</button>
                <input placeholder='Search a dog here...' required onChange={handleChange} type='text' value={keyword}></input>
            </form>
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
