import { useContext } from "react";
import { MainComponentsContext } from "./MainComponent";
type PaginaionbuttonProps = {
  value: number;
  className?: string;
};
export const Paginaionbutton = ({ value, className }: PaginaionbuttonProps) => {
  const mainComponentsContext = useContext(MainComponentsContext);
  const buttonvalue = value;
  const handleonclik = () => {
    if (mainComponentsContext) mainComponentsContext(buttonvalue);
  };
  return (
    <button className={`pagination-btn ${className}`} onClick={handleonclik}>
      {value}
    </button>
  );
};
