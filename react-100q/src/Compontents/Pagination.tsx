import React from "react";
import { Paginaionbutton } from "./Paginaionbutton";
type PaginationProps = {
  value: number;
  paginationValue: number;
};
export const Pagination = ({ value, paginationValue }: PaginationProps) => {
  const array = [];
  let NumberofPagination = value / 20;
  for (let i = 1; i <= NumberofPagination; i++) {
    array.push(i);
  }

  return (
    <div className="pagination">
      {array.map((value) =>
        value === paginationValue ? (
          <Paginaionbutton key={value} value={value} className="active" />
        ) : (
          <Paginaionbutton key={value} value={value} />
        )
      )}
    </div>
  );
};
