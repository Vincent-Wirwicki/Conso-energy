import { ChangeEvent } from "react";

export interface InputNumberProps {
  id: string;
  label: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: {
    msg: string | null;
    isError: boolean;
  };
}
