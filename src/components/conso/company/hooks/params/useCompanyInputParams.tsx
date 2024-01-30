// import { ParamsType } from "../type/paramsType";
import useInputNumber from "@/components/layout/input/number/hooks/useInputNumber";
// coef = 11.18, TICGN = 0.01637, CTA

interface Args {
  coef: number;
  TICGN: number;
  CTA: number;
  kwhHT: number;
  aboHT: number;
}

const useCompanyInputParams = ({ ...args }: Args) => {
  const params = {
    kwhHT: {
      input: useInputNumber({
        id: "KwhHT",
        label: "kwh ht ",
        val: args.kwhHT,
      }),
    },
    aboHT: {
      input: useInputNumber({
        id: "AboHT",
        label: "Abo par mois ht ",
        val: args.aboHT,
      }),
    },
    coef: {
      input: useInputNumber({
        id: "Coef",
        label: "Coef de m3 en Kwh ",
        val: args.coef,
      }),
    },
    TICGN: {
      input: useInputNumber({ id: "TICGN", label: "TICGN ", val: args.TICGN }),
    },
    CTA: {
      input: useInputNumber({ id: "CTA", label: "CTA par an ", val: args.CTA }),
    },
  };

  return { params };
};

export default useCompanyInputParams;
