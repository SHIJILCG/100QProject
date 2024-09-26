import { useState } from "react";
import { Dropdownbutton } from "./Dropdownbutton";
import {
  studentNameProps,
  studentSubjectProps,
  TheMakeCardThreeProps,
  TheMakeCardTwoProps,
} from "../Types/type";
import {
  add_coma_to_array_element,
  getstudentsName,
  getsubjectsofstudent,
} from "../utils/answersfun";
import { ArrowButton } from "./ArrowButton";
export const MakeCardTypeThree = ({
  value,
}: TheMakeCardThreeProps | TheMakeCardTwoProps) => {
  const [toggle, settoggle] = useState(false);
  const [subjectName, setsubjectName] = useState("English");
  const [studentname, setstudentname] = useState("Ravi");
  let subjectnamevalue = subjectName as studentSubjectProps;
  let studentnamevlaue = studentname as studentNameProps;
  const addtoggleclass = () => {
    settoggle((Prev) => !Prev);
  };
  console.log(toggle);
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
        <div className="Question">Question:{value.Q}</div>
        <div className="Answer">Answer:{add_coma_to_array_element(value.A(studentnamevlaue))}</div>

        {value.isselect && (
          <Dropdownbutton data={selectvalue} onChange={onChange} />
        )}
        <ArrowButton onChangeToggle={addtoggleclass} />
      </div>
    </>
  );
};

