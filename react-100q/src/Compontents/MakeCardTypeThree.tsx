import React, { useState, createRef } from "react";
import { Dropdownbutton } from "./Dropdownbutton";
import {
  MapValuesProps,
  studentNameProps,
  studentSubjectProps,
} from "../Types/type";
import {
  add_coma_to_array_element,
  getstudentsName,
  getsubjectsofstudent,
} from "../utils/answersfun";
import { ArrowButton } from "./ArrowButton";
export const MakeCardTypeThree = ({ value }: MapValuesProps) => {
  const [toggle, settoggle] = useState(false);
  const [subjectName, setsubjectName] = useState("English");
  const [studentname, setstudentname] = useState("Ravi");
  const btnRef = React.createRef<HTMLButtonElement>();
  let subjectnamevalue: studentSubjectProps =
    subjectName as studentSubjectProps;
  let studentnamevlaue: studentNameProps = studentname as studentNameProps;
  const addtoggleclass = () => {
    settoggle((Prev) => !Prev);
    btnRef.current?.classList.toggle("active");
  };

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    value.isselectType === "student"
      ? setstudentname(e.target.value)
      : setsubjectName(e.target.value);
  };
  const selectvalue =
    value.isselectType === "student"
      ? getstudentsName("name")
      : getsubjectsofstudent("Aju");

  return (
    <>
      <div className={"card"}>
        <div className="Question">
          Question {value.id} : {value.Q}
        </div>
        {toggle && (
          <div className="Answer">
            Answer :
            {value.A.length === 0
              ? // @ts-ignore
                add_coma_to_array_element(value.A())
              : value.isselectType === "student"
              ? // @ts-ignore
                add_coma_to_array_element(value.A(studentnamevlaue))
              : // @ts-ignore
                add_coma_to_array_element(value.A(subjectnamevalue))}
          </div>
        )}
        {value.isselect && (
          <Dropdownbutton data={selectvalue} onChange={onChange} />
        )}
        <ArrowButton onChangeToggle={addtoggleclass} btnref={btnRef} />
      </div>
    </>
  );
};
