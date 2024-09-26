type DropdownbuttonProps = {
  data: string[],
  onChange:(e:React.ChangeEvent<HTMLSelectElement>)=> void
};
export const Dropdownbutton = ({ data,onChange }: DropdownbuttonProps) => {
  return (
    <div>
      <select className="select-btn" onChange={(e)=> onChange(e)} >
        {data.map((da, index) => (
          <option key={index} value={da}>
            {da}
          </option>
        ))}
      </select>
    </div>
  );
};
