import {useState, useEffect} from 'react';
import { getImageDog }  from '../services/theDogApi';

export function useDogImages({ id } = {id: null}) {

  const [dogImages, setDogImages] = useState([]);
  const [loading, setLoading] = useState(false)
	useEffect(() => {
		if(id)
		{
      setLoading(true)
			getImageDog(id).then(data => {
        setDogImages(data)
        setLoading(false)
      })
		}
	}, [id])

  return { dogImages , loading}
}