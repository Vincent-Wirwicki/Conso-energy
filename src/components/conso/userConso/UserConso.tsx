import { InputNumberProps } from "@/components/layout/input/number/type/inputNumberType";
import { SelectInputProps } from "@/components/layout/input/select/type/SelectInputType";
import InputNumber from "@/components/layout/input/number/component/InputNumber";
import SelectInput from "@/components/layout/input/select/component/SelectInput";
import LabelInput from "@/components/layout/input/label/LabelInput";

interface Props {
  conso: InputNumberProps;
  period: InputNumberProps;
  select: SelectInputProps;
}

const UserConso: React.FC<Props> = ({ conso, period, select }) => {
  // const checkIsPeriod = (isPeriod: string) => {
  //   if (isPeriod === "perDay") return "jours";
  //   if (isPeriod === "perMonth") return "mois";
  //   if (isPeriod === "perYear") return "an";
  // };

  return (
    <div className="card flex flex-col gap-2 h-fit box-border p-10  text-xs ">
      <div className="flex w-full justify-between items-end">
        <LabelInput
          id={conso.id}
          label={conso.label}
          className="border-b border-neutral-800 w-1/2"
        />
        <div className="w-1/2">
          <InputNumber {...conso} />
        </div>
      </div>

      <div className="flex items-end">
        <LabelInput
          id={period.id}
          label={period.label}
          className="w-1/6 border-b border-neutral-800"
        />
        <InputNumber {...period} />
        <div className="w-1/3">
          <SelectInput {...select} />
        </div>
      </div>
    </div>
  );
};

export default UserConso;
