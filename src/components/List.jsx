import React from 'react'
import { regData } from "../mock-data/data.js"
import Row from './Row'

function List(){

  return(
    // replace mock data with props
    <div className="list" style={{border: "3px solid brown"}}>
       {Object.entries(regData).map((person) =>
            <Row person={person}/>
       )}
</div>
  )
}

export default List