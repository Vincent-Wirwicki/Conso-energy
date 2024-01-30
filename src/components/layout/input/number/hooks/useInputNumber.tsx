import { useState, ChangeEvent } from "react";
import { useDebounce } from "../../../../../utils/debounce/useDebounce";
import { InputNumberProps } from "../type/inputNumberType";

type ArgsType = {
  id: string;
  label: string;
  val: number;
  maxLength?: number;
};

type Errors = {
  msg: string | null;
  isError: boolean;
};

const useInputNumber = ({
  id = "",
  label = "",
  val = 0,
  maxLength = 10,
}: ArgsType): InputNumberProps => {
  const [inputValue, setInputValue] = useState<number>(val);
  const [err, setErr] = useState<Errors>({
    msg: null,
    isError: false,
  });

  const debounceTimer = 50;
  const value = useDebounce(inputValue, debounceTimer);
  const error = {
    msg: useDebounce(err.msg, debounceTimer),
    isError: useDebounce(err.isError, debounceTimer),
  };

  const onChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (value.length >= maxLength) {
      setErr({ msg: `max ${maxLength} chiffres`, isError: true });
    } else {
      setInputValue(Number(value));
      setErr({ msg: null, isError: false });
    }
  };

  return { value, onChange, error, id, label };
};

export default useInputNumber;
