import LabelInput from "@/components/layout/input/label/LabelInput";
import InputNumber from "@/components/layout/input/number/component/InputNumber";
import { InputNumberProps } from "@/components/layout/input/number/type/inputNumberType";
import React from "react";

interface Props {
  aboHT: InputNumberProps;
  kwhHT: InputNumberProps;
}

const CarMainParams: React.FC<Props> = ({ aboHT, kwhHT }) => {
  return (
    <div className="card-main-params ">
      <div className="flex justify-between items-end border-b border-neutral-800">
        <LabelInput id={aboHT.id} label={aboHT.label}></LabelInput>
        <InputNumber {...aboHT} />
      </div>
      <div className="flex justify-between items-end border-b border-neutral-800 pt-2">
        <LabelInput id={kwhHT.id} label={kwhHT.label}></LabelInput>
        <InputNumber {...kwhHT} />
      </div>
    </div>
  );
};

export default CarMainParams;
