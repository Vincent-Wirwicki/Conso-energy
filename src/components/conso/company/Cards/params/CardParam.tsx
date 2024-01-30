// import { ParamsType } from "../params/type/paramsType";
import InputNumber from "@/components/layout/input/number/component/InputNumber";
import LabelInput from "@/components/layout/input/label/LabelInput";
import { CompanyInputParamsType } from "../../types/companyTypes";

interface Props {
  params: CompanyInputParamsType;
}

const CardParam: React.FC<Props> = ({ params }) => {
  // const filter = Object.values(params).filter(
  //   key => key.input.id != "aboHT" && key.input.id !== "kwhHT"
  // );
  return (
    <div className=" card-section-params  ">
      <div className="card-title">
        <h3 className="">Param. prix</h3>
      </div>
      {Object.values(params).map(({ input }, index) => (
        <div
          key={index}
          className="flex justify-between items-end pb-2 px-2 w-full"
        >
          <div className="w-2/3 border-b border-neutral-800">
            <LabelInput
              id={input.id}
              label={input.label}
              className="text-neutral-200 text-xs "
            />
          </div>
          <div className="w-1/3 text-xs">
            <InputNumber {...input} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardParam;
