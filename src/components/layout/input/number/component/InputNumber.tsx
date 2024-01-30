import { InputNumberProps } from "../type/inputNumberType";

const InputNumber: React.FC<InputNumberProps> = ({
  id,
  // label,

  value,
  onChange,
  error,
}) => {
  const { isError, msg } = error;
  return (
    <>
      {/* <label htmlFor={id} className="">
        {label}
      </label> */}
      <div className="relative w-fit ">
        <input
          id={id}
          type="number"
          onChange={onChange}
          value={value}
          className={isError ? "input-error" : "input-default"}
        />
        <span style={{ opacity: isError ? 1 : 0 }} className="input-error-msg">
          {isError && msg}
        </span>
      </div>
    </>
  );
};

export default InputNumber;
