import Pet from './Pet'
import { useState, useEffect } from 'react'
const SearchParams = () => {
    const [location, setLocation] = useState("")
    const [animal, setAnimal] = useState('')
    const [breed, setBreed] = useState('')
    const [pets, setPets] = useState([])
    const ANIMALS = ["Dog", "Bird", "Cat", "rabbit", "reptile"]

    useEffect(() => {
        requestPets()
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => alert('hi'), 3000)
        return () => { clearTimeout(timer) }
    }, [animal])

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        )
        const json = await res.json()
        console.log(json)

        setPets(json.pets)
    }
    return (
        <div className="search-params">
            <form>
                <label htmlFor='location'>
                    Location
                         <input id='location' value={location} onChange={(e) => { setLocation(e.target.value) }} placeholder='location' />
                </label>
                <label htmlFor="animal">
                    Animal
                         <select id='animal'
                        value={animal}
                        onChange={(e) => { setAnimal(e.target.value) }}
                        onBlur={(e) => { setAnimal(e.target.value) }}
                    >
                        <option />
                        {
                            ANIMALS.map(animal => (
                                <option value={animal} key={animal}>
                                    {animal}
                                </option>
                            ))
                        }

                    </select>

                </label>
                <label htmlFor='breed'>
                    Breed
                     <select
                        id='breed'
                        value={breed}
                        onBlur={(e) => { e.target.value }}
                        onChange={(e) => { e.target.value }}
                    >
                        <option />
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {
                pets.map(pet => (
                    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                ))
            }
        </div>
    )
}

export default SearchParams