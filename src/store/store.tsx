// import { ChangeEvent } from "react";
// import { proxy } from "valtio";
// import useCalcConso from "@/components/conso/calcConso/hooks/useCalcConso";

// const companyDefault = {
//   name: "",
//   params: {
//     coef: 11.18,
//     TICGN: 0.01637,
//     CTA: 34.99,
//     euroPerKwhHT: 0.0695,
//     aboHT: 16,
//   },
//   calc:useCalcConso
// };

// export const store = proxy({
//   companies: [{ ...companyDefault }],
// });

// export const addCompany = (
//   { m3, coef }: ConsoArgs
// ) => {
//   store.companies.push({
//     name: "",
//     params: {
//       coef: 11.18,
//       TICGN: 0.01637,
//       CTA: 34.99,
//       euroPerKwhHT: 0.0695,
//       aboHT: 16,
//     },
//     calc:({},{euroPerKwhHT:},{}) => {...results}
//   });
// };

// TICGN: { HT: 0.01637, TTC: 0 },
// sub: { HT: 0, TTC: 0 },
// CTA: { HT: 0, TTC: 0 },
// kwh: { HT: 0, TTC: 0 }, ({ TICGN, CTA }: TaxesArgs, { euroPerKwhHT, aboHT }: PriceHTArgs, { m3, coef }: ConsoArgs) => ResultsType
