import React, { useEffect } from 'react'
import "./index.scss"
import LoginService from '../../services/foodService'

function ListItem() {
  useEffect(() => {
    LoginService.getList()
  },[])
  return (
    <div >
      
    </div>
  )
}

export default ListItem