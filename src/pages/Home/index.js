import React, { useEffect, useState } from 'react'
import { searchDogs }  from '../../services/theDogApi';
import ListOfDogs from '../../components/ListOfDogs';
import { useLocation } from 'wouter';

export default function Home() {
    const [dogs, setDogs] = useState([]);
    const [keyword, setKeyword] = useState('')
    const [_, pushLocation] = useLocation()

    useEffect(() => {
        const KeywordToUse = localStorage.getItem('lastKeyword') || 'Alaskan Malamute';
        console.log(localStorage.getItem('lastKeyword'))
        searchDogs({ keyword: KeywordToUse }).then(data => {
            setDogs(data)
        })
    }, [])

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
                <input placeholder='Search a dog here...' onChange={handleChange} type='text' value={keyword}></input>
            </form>
            <div className='App-main'>
                <div className='App-results'>
                    <h3 className='App-title'>Última búsqueda</h3>
                    <ListOfDogs dogs={dogs}/>
                </div>
            </div>
        </div>
     );
}
