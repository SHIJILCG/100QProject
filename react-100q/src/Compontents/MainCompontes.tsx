import { TheQuestion_Answer_Array } from "../data";
import { MakeCardTypeThree } from "./MakeCardTypeThree";
export const MainCompontes = () => {
  return (
    <>
      {TheQuestion_Answer_Array.map((item) => (
        <MakeCardTypeThree key={item.id} value={item} />
      ))}
    </>
  );
};
