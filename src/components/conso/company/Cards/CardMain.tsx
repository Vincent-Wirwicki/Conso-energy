import CardPrice from "./price/CardPrice";
import CardParam from "./params/CardParam";
import CardTaxes from "./taxes/CardTaxes";

import {
  // CompanyParamsType,
  CompanyResultsType,
  CompanyInputParamsType,
} from "../types/companyTypes";

interface Props {
  results: CompanyResultsType;
  // params: CompanyParamsType;
  inputParams: CompanyInputParamsType;
  name: string;
  isPeriod: string;
  periodValue: number;
}
const CardMain: React.FC<Props> = ({
  results,
  name,
  // params,
  inputParams,
  isPeriod,
  periodValue,
}) => {
  const { priceTTC } = results;

  return (
    <article className="card card-main" onClick={e => console.log(e.target)}>
      <h1 className="text-xl font-bold w-full border-b border-neutral-800">
        {name}
      </h1>
      <CardPrice
        // consumption={consumption}
        priceTTC={priceTTC}
        isPeriod={isPeriod}
        periodValue={periodValue}
      />
      <CardTaxes results={results} isPeriod={isPeriod} />

      {/* <CarMainParams aboHT={aboHT.input} kwhHT={kwhHT.input} /> */}
      <CardParam params={inputParams} />
    </article>
  );
};

export default CardMain;
