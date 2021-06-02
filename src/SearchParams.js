import { useState } from 'react'
const SearchParams = () => {
    const [location, setLocation] = useState("")
    return (
        <div className="search-params">
            <form>
                <label htmlFor='location'>
                    Location
                         <input id='location' value={location} onChange={(e) => { setLocation(e.target.value) }} placeholder='location' />
                </label>
            </form>
        </div>
    )
}

export default SearchParams