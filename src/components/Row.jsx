import React from 'react'

function Row({person}){

  return(
   <div id="parentPerson">
    <div className="childPerson">{person[1].name}</div>
    <div className="childPerson">{person[1].address}</div>
    <div className="childPerson">{person[1].state}</div>
    <div className="childPerson">{person[1].zip}</div>
    <div className="childPerson">{person[1].age}</div>
    <br /></div>
  )
}

export default Row