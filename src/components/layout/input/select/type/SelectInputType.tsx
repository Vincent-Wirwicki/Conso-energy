import { ChangeEvent } from "react";

export type SelectInputOptions = {
  label: string;
  value: string;
};

export interface SelectInputProps {
  id: string;
  opts: SelectInputOptions[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}
