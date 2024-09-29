import React from 'react'
import { Paginaionbutton } from './Paginaionbutton'
type PaginationProps={
    value:number
}
export const Pagination = ({value}:PaginationProps) => {
    let array=[]
    let numberofpagination = value / 20
    for(let i = 1; i <=numberofpagination; i++){
          array.push(i)
    }

  return (
    <div className='pagination'>
         {
            array.map(value => <Paginaionbutton key={value} value={value}/>)
         }
    </div>
  )
}
