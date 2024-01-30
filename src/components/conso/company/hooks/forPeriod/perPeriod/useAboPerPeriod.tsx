import { useMemo } from "react";

const useAboPerPeriod = (abo: number, cta: number) => {
  const aboPer = useMemo(() => {
    const tva = (v: number) => v + v * 0.055;
    const ht = {
      d: cta / 365 + abo / 30.4,
      m: cta / 12 + abo,
      y: abo * 12 + cta,
    };
    const { d, m, y } = ht;
    const ttc = {
      d: tva(d),
      m: tva(m),
      y: tva(y),
    };
    return { ht, ttc };
  }, [abo, cta]);

  return { aboPer };
};

export default useAboPerPeriod;
