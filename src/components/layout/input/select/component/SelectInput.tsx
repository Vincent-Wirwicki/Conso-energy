import basicChevron from "../../../../../assets/basicChevron.svg";
import { SelectInputProps } from "../type/SelectInputType";

const SelectInput: React.FC<SelectInputProps> = ({
  id,
  onChange,
  value,
  opts,
}) => (
  <select
    id={id}
    name="PerPeriod"
    onChange={onChange}
    value={value}
    style={{
      backgroundImage: `url(${basicChevron})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 0.7rem center",
    }}
    className="input-select"
  >
    {opts.map(({ label, value }, index) => (
      <option key={index} value={value}>
        {label}
      </option>
    ))}
  </select>
);

export default SelectInput;
