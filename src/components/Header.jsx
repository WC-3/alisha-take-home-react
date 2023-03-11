import React from 'react'
import { RiFolderUserLine } from 'react-icons/ri'

function Header(){
  return(
    <div className="header" style={{border: "3px solid green"}}>
    <RiFolderUserLine /> &nbsp;
    Personnel Directory &nbsp;
    <RiFolderUserLine />
    </div>
  )
}

export default Header;