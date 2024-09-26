import { useState } from "react";
import { studentNameProps, TheMakeCardTwoProps } from "../Types/type";
import {
  add_coma_to_array_element,
  getstudentsName,
} from "../utils/answersfun";
import { Dropdownbutton } from "./Dropdownbutton";
import downImg from "../img/CaretDown.png";

export const MakeCardTypeTow = (
  // { value, selectvalue }: TheMakeCardTwoProps,
  // {}
) => {
  // const [toggle, settoggle] = useState("");
  // const [studentname, setstudentname] = useState("Ravi");
  // // console.log(studentname)
  // let studentnamevalu = studentname as studentNameProps;
  // const addtoggleclass = () => {
  //   toggle === "" ? settoggle("active") : settoggle("");
  // };
  // const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setstudentname(e.target.value);
  // };
  // return (
  //   <>
  //     <div className={"card" + toggle}>
  //       <div className="Question">Q:{value.Q}</div>
  //       <div className="Answer">
  //         A: {add_coma_to_array_element(value.A(studentnamevalu))}
  //       </div>
  //       <Dropdownbutton data={selectvalue} onChange={onChange} />
  //       <button className="btn" onClick={addtoggleclass}>
  //         <img src={downImg} alt="arrow down"  />
  //       </button>
  //     </div>
  //   </>
  // );
};
