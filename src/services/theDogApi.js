import { apiKey, apiURL } from "../constants"

export const getDogs = async () => {
    const limit = 9
    const page = 0
    const getDogsApi = `${apiURL}breeds?page=${page}&limit=${limit}`

    const res = await fetch(getDogsApi,{
        method: 'GET',
        headers: {
            'x-api-key': apiKey
        }
    })
    const data = await res.json()
    const dogs = data.map(dog => {
        const { id, name, reference_image_id } = dog
        return { id, name, reference_image_id}
    })
    return dogs
}
export const searchDogs = async (params = 'Bull Terrier') => {
    const searchDogs = `${apiURL}breeds/search?q=${params}`
    
    const res = await fetch(searchDogs, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey
        }
    })
    const data = await res.json()
    const dogs = data.map(dog => {
        const { id, name , reference_image_id } = dog
        return { id, name, reference_image_id }
    })
    return dogs
}

export const getImageDog = async (reference_image_id) => {
    const imageDog = `${apiURL}images/${reference_image_id}`

    const res = await fetch(imageDog, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey
        }
    })
    const data = await res.json()
    const { url } = data
    return url
}