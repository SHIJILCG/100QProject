import { TheQandA, TheQandA2, TheQandA3, TheQandA4 } from "../data";
import { Makecard } from "./MakeCard";
import { MakeCardTypeTow } from "./MakeCardTypeTow";
import { getstudentsName, getsubjectsofstudent } from "../utils/answersfun";
import { MakeCardTypeThree } from "./MakeCardTypeThree";
export const MainCompontes = () => {
  return (
    <>
      {/* {TheQandA3.map((item) => (
      <Makecard key={item.id} value={item}/>
    ))} */}
      {TheQandA3.map((item) => (
        <MakeCardTypeThree
          key={item.id}
          value={item}
        />
      ))}
    </>
  );
};
