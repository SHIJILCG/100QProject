import { useState } from "react";
import { TheMakeCardProps } from "../Types/type";

export const Makecard = ({ value }: TheMakeCardProps) => {
  const [toggle, settoggle] = useState("");
  const addtoggleclass = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    toggle === "" ? settoggle("active") : settoggle("");
  };

  return (
    <>
      <div className={"card" + toggle}>
        <div className="Question">Q:{value.Q}</div>
        <div className="Answer">
          A:
          {Array.isArray(value.A) ? value.A.join(", ") : value.A}
        </div>
        <button className="btn" onClick={(e) => addtoggleclass(e)}>
          ▼
        </button>
      </div>
    </>
  );
};
