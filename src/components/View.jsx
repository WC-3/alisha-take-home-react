import React from 'react'
import Add from './Add'
import List from './List'
import Search from './Search'

function View(){
  return(
<div className="view" style={{border: "3px solid purple"}}>
<Add />
<Search />
<List />
</div>
  )
}

export default View;