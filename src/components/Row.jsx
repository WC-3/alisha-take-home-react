import React from 'react'
import { RiDeleteBack2Line } from 'react-icons/ri'
import { RxUpdate } from 'react-icons/rx'

function Row({person}){

  return(
    <>
   <div className="list-row">
    <div className="list-row-cell name">{person[1].name}</div>
    <div className="list-row-cell address">{person[1].address}</div>
    <div className="list-row-cell state">{person[1].state}</div>
    <div className="list-row-cell zip">{person[1].zip}</div>
    <div className="list-row-cell age">{person[1].age}</div>
    <RxUpdate className='icon'/>
    <RiDeleteBack2Line className='icon' />
    </div>
    </>
  )
}

export default Row