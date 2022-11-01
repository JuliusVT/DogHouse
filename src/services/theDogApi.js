import { apiKey, apiURL } from "../constants"

export const searchDogs = async ({ keyword = '' }) => {
    const searchDogs = `${apiURL}breeds/search?q=${keyword}`

    const res = await fetch(searchDogs, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey
        }
    })
    const data = await res.json().then(response => {
        const { id } = response[0];
        return { id }
    })
    .catch(error => {
        console.log('hubo un problema con la peticion fetch: ' + error);
        return { message: `${keyword} doesn't exist in the API`}
    })
    return data

}

export const getImageDog = async (breed_id) => {
    const searchDogImages= `${apiURL}images/search?limit=9&size=full&breed_id=${breed_id}`

    const res = await fetch(searchDogImages, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey
        }
    })
    const data = await res.json()
    const dogs = data.map(dog => {
        const { id, url } = dog;
        const { name } = dog.breeds[0];
        const additional = dog.breeds[0];
        return { id, url, name , additional}
    })
    return dogs
}