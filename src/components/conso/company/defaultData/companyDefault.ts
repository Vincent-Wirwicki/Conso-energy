import { CompanyParamsType, CompanyResultsType } from "../types/companyTypes";

export const companyInitResults: CompanyResultsType = {
  priceTTC: {
    d: 0,
    m: 0,
    y: 0,
  },
  TICGNper: {
    ht: {
      d: 0,
      m: 0,
      y: 0,
    },
    ttc: {
      d: 0,
      m: 0,
      y: 0,
    },
  },
  aboTTC: {
    d: 0,
    m: 0,
    y: 0,
  },
  totalKwh: 0,
  kwhTTC: 0,
};

export const companyInitParams: CompanyParamsType = {
  coef: 11.18,
  TICGN: 0.01637,
  CTA: 34.99,
  kwhHT: 0.0695,
  aboHT: 16,
};
