import { useState, ChangeEvent } from "react";
import { SelectInputProps, SelectInputOptions } from "../type/SelectInputType";

type ArgsType = {
  id: string;
  opts: SelectInputOptions[];
  maxLength?: number;
};

const useSelectInput = ({ id, opts }: ArgsType): SelectInputProps => {
  const [value, setValue] = useState<string>(opts[0].value);

  const onChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLSelectElement>) => setValue(value);

  return { value, onChange, id, opts };
};

export default useSelectInput;
