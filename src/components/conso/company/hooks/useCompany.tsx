import useCompanyInputParams from "./params/useCompanyInputParams";
import useCompanyCalcPrice from "./useCompanyCalcPrice";

import { CompanyParamsType, CompanyResultsType } from "../types/companyTypes";

type UserConso = {
  m3: number;
  period: number;
};

const useCompany = (
  { m3, period }: UserConso,
  { ...params }: CompanyParamsType,
  { ...results }: CompanyResultsType
) => {
  const { params: companyInputParams } = useCompanyInputParams({ ...params });
  const { coef, TICGN, CTA, kwhHT, aboHT } = companyInputParams;
  const { data } = useCompanyCalcPrice(
    { m3, period },
    {
      coef: coef.input.value,
      TICGN: TICGN.input.value,
      CTA: CTA.input.value,
      kwhHT: kwhHT.input.value,
      aboHT: aboHT.input.value,
    }
  );

  results = { ...data };

  return { results, companyInputParams };
};

export default useCompany;
