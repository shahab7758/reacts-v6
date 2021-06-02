import { useState } from 'react'
const SearchParams = () => {
    const [location, setLocation] = useState("")
    const [animal, setAnimal] = useState('')
    const [breed, setBreed] = useState('')
    const ANIMALS = ["Dog", "Bird", "Cat", "rabbit", "reptile"]
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
            </form>
        </div>
    )
}

export default SearchParams