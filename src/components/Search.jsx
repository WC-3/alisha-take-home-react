import React from 'react'

function Search(){
  return(
    <div className="search">
            <select name = 'State' className='search-dropdown' required>
                    <option key='all'>All</option>
                    <option key='id'>Id</option>
                    <option key='name'>Name</option>
                    <option key='age'>Age</option>
            </select>
                <input type='text' className='searchbar' placeholder='search'/>
                <button className='addButton'>Search</button>
  </div>
  )
}

export default Search;