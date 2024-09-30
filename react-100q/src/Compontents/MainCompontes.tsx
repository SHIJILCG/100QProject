import { useState } from "react";
import { TheQuestion_Answer_Array } from "../utils/answers/data";
import { MakeCardTypeThree } from "./MakeCardTypeThree";
import { Pagination } from "./Pagination";
import { createContext } from "react";
export const MainCompontesContext= createContext<React.Dispatch<React.SetStateAction<number>> | null>(null) 
export const MainCompontes = () => {
  const [paginationvalue, setpaginationvalue] = useState(1)
  let paginarionbuttons=document.querySelectorAll('.pagination-btn')
   
if(paginarionbuttons.length > 0){
  paginarionbuttons.forEach(buttons=> buttons.classList.remove('active'))
  paginarionbuttons[paginationvalue - 1].classList.add('active') 
}
  let lastfilterpoint = paginationvalue * 20
  let firstfilterpoint = lastfilterpoint - 20
  let TheQuestion_Answer_ArrayOffilter= TheQuestion_Answer_Array.slice(firstfilterpoint,lastfilterpoint)
  return (
    <>
      {TheQuestion_Answer_ArrayOffilter.map((item) => (
        <MakeCardTypeThree key={item.id} value={item} />
      ))}
      <MainCompontesContext.Provider value={setpaginationvalue}>
                <Pagination  value={TheQuestion_Answer_Array.length} />
      </MainCompontesContext.Provider>
    </>
  );
};