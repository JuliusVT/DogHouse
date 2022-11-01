import {useState, useEffect, useContext} from 'react';
import { getImageDog }  from '../services/theDogApi';
import DogsContext from '../context/DogsContext';

export function useDogImages({ id } = {id: null}) {

  const {dogs, setDogs} = useContext(DogsContext);

  const [loading, setLoading] = useState(false)
	useEffect(() => {
		if(id)
		{
      localStorage.removeItem('dogs')
      setLoading(true)
			getImageDog(id).then(data => {
        setDogs(data)
        localStorage.setItem('dogs', JSON.stringify(data))
        setLoading(false)
      })
		}
	}, [id, setDogs])

  return { dogs , loading}
}