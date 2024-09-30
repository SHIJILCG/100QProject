import React, { useContext } from 'react'
import { MainCompontesContext } from './MainCompontes'
type PaginaionbuttonProps={
     value:number
     className?:string
}
export const Paginaionbutton = ({value,className}:PaginaionbuttonProps) => {
    const mainCompontesContext = useContext(MainCompontesContext)
    let buttonvalue=value
    const handleonclik=()=>{
          if(mainCompontesContext)
               mainCompontesContext(buttonvalue)
         
    }
  return (
      <button className={`pagination-btn ${className}`} onClick={handleonclik}>{value}</button>
  )
}
