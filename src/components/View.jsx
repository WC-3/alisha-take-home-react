import React from 'react'
import Add from './Add'
import List from './List'

function View(){
  return(
<div className="view" style={{border: "3px solid purple"}}>
View
<Add />
<List />
</div>
  )
}

export default View;