import { useEffect, useState } from 'react';
import { searchDogs }  from '../services/theDogApi';

export function useDogs ({ keyword } = {keyword: null}) {
    const [loading, setLoading] = useState(false);
    const [dogs, setDogs] = useState([]);
    const [keytitle, setKeytitle] = useState('')
    useEffect(() => {
        setLoading(true)
        const KeywordToUse = keyword ?  keyword : localStorage.getItem('lastKeyword') || 'Alaskan Malamute';
        searchDogs({ keyword: KeywordToUse }).then(data => {
            setDogs(data)
            setLoading(false)
            if(keyword && data.id){
                localStorage.setItem('lastKeyword',keyword)
            } 
        })
        setKeytitle(KeywordToUse)
    }, [keyword])

    return { dogs, loading, keytitle }
}