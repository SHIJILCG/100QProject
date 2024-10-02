import React, { useState, createRef } from "react";
import { Dropdownbutton } from "./Dropdownbutton";
import {
  MapValuesProps,
  studentNameProps,
  studentSubjectProps,
} from "../Types/type";
import { add_coma_to_array_element } from "../utils/answers/common";
import { ArrowButton } from "./ArrowButton";
import { STUDENTS, SUBJECTS } from "../Data/DataObject";

export const MakeCard = ({ value }: MapValuesProps) => {
  const [toggle, settoggle] = useState(false);
  const [subjectName, setsubjectName] = useState("English");
  const [studentname, setstudentname] = useState("Ravi");
  const studentNameValue = studentname as studentNameProps;
  const subjectNameValue = subjectName as studentSubjectProps;

  const StudentVariable = "student";
  const ToggleVariable = "active";
  const btnRef = React.createRef<HTMLButtonElement>();

  const addtoggleclass = () => {
    settoggle((Prev) => !Prev);
    btnRef.current?.classList.toggle(ToggleVariable);
  };

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    value.isselectType === StudentVariable
      ? setstudentname(e.target.value)
      : setsubjectName(e.target.value);
  };
  const selectvalue =
    value.isselectType === StudentVariable
      ? Object.values(STUDENTS)
      : Object.values(SUBJECTS);

  return (
    <>
      <div className={"card"}>
        <div className="Question">
          Question {value.id} : {value.Q}
        </div>
        {toggle && (
          <div className="Answer">
            Answer :
            {value.A !== undefined && value.A.length === 0
              ? add_coma_to_array_element(value.A())
              : ""}
            {value.A1 !== undefined && value.isselectType == "student"
              ? add_coma_to_array_element(value.A1(studentNameValue))
              : ""}
            {value.A2 !== undefined && value.isselectType == "subject"
              ? add_coma_to_array_element(value.A2(subjectNameValue))
              : ""}
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
