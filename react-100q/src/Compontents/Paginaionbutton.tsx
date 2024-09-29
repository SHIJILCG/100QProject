import React, { useContext } from 'react'
import { MainCompontesContext } from './MainCompontes'
type PaginaionbuttonProps={
     value:number
}
export const Paginaionbutton = ({value}:PaginaionbuttonProps) => {
    const mainCompontesContext = useContext(MainCompontesContext)
    let buttonvalue=value
    const handleonclik=()=>{
          if(mainCompontesContext)
               mainCompontesContext(buttonvalue)
         
    }
  return (
      <button className='pagination-btn' onClick={handleonclik}>{value}</button>
  )
}
