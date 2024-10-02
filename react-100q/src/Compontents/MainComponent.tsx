import { useState } from "react";
import { Question_Answer_Array } from "../utils/answers/Question_Answer_Array";
import { MakeCard } from "./MakeCard";
import { Pagination } from "./Pagination";
import { createContext } from "react";
export const MainComponentsContext = createContext<React.Dispatch<
  React.SetStateAction<number>
> | null>(null);
export const MainComponent = () => {
  const [paginationvalue, setpaginationvalue] = useState(1);

  let lastfilterpoint = paginationvalue * 20;
  let firstfilterpoint = lastfilterpoint - 20;
  const TheQuestion_Answer_ArrayOffilter = Question_Answer_Array.slice(
    firstfilterpoint,
    lastfilterpoint
  );
  return (
    <>
      {TheQuestion_Answer_ArrayOffilter.map((item) => (
        <MakeCard key={item.id} value={item} />
      ))}
      <MainComponentsContext.Provider value={setpaginationvalue}>
        <Pagination
          value={Question_Answer_Array.length}
          paginationValue={paginationvalue}
        />
      </MainComponentsContext.Provider>
    </>
  );
};
