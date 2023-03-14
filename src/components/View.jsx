import React from 'react'
import Add from './Add'
import List from './List'
import Search from './Search'

function View({data, setData}){
  return(
<div className="view" style={{border: "3px solid purple"}}>
<Add />
<Search data={data} setData={setData} />
<List />
</div>
  )
}

export default View;