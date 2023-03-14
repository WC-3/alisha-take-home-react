import React, { useState } from 'react'
import axios from 'axios'

function Search({data, setData}){

  const options = ['all', ' id', 'name', 'age']

  const [selected, setSelected] = useState(options[0])

  return(
    <div className="search">
            <select  className='search-dropdown' value={selected} onChange={e => setSelected(e.target.value)} required>
              {options.map((value) => (
                  <option value={value} key={value}>
                  {value}
              </option>
              ))}
            </select>
                <input type='text' className='searchbar' placeholder='search'/>
                <button className='addButton' onClick={() => console.log(selected)}>Search</button>
  </div>
  )
}

export default Search;