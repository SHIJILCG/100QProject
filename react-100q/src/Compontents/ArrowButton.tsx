
import downImg from "../img/CaretDown.png";
type ArrowButtonProps ={
    onChangeToggle:()=> void
}
export const ArrowButton = ({onChangeToggle}:ArrowButtonProps) => {
  return (
     <button className="btn" onClick={onChangeToggle}><img src={downImg} alt="arrow down"/></button>
  )
}
