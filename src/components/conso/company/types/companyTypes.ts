import { InputNumberProps } from "@/components/layout/input/number/type/inputNumberType";

export type Period = {
  d: number;
  m: number;
  y: number;
};

export type CompanyParamsType = {
  coef: number;
  TICGN: number;
  CTA: number;
  kwhHT: number;
  aboHT: number;
};

export type CompanyInputParamsType = {
  kwhHT: {
    input: InputNumberProps;
  };
  aboHT: {
    input: InputNumberProps;
  };
  coef: {
    input: InputNumberProps;
  };
  TICGN: {
    input: InputNumberProps;
  };
  CTA: {
    input: InputNumberProps;
  };
};

export type CompanyResultsType = {
  priceTTC: Period;
  TICGNper: {
    ht: Period;
    ttc: Period;
  };
  aboTTC: Period;
  totalKwh: number;
  kwhTTC: number;
};

export type CompanyType = {
  uid: number;
  name: string;
  results: CompanyResultsType;
  params: CompanyParamsType;
};
