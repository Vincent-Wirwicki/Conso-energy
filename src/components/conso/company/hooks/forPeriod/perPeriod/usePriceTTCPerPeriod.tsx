import { useMemo } from "react";
interface Args {
  period: {
    d: number;
    m: number;
    y: number;
  };
  kwhTTC: number;
  totalKwh: number;
}

const usePriceTTCPerPeriod = ({ period, kwhTTC, totalKwh }: Args) => {
  const priceTTCPer = useMemo(() => {
    // p = period , k = 1 kwhTTC, m = totalKwh
    const priceTTC = (p: number, k: number, m: number) => p + k * m;

    const kwhDay = totalKwh / 365;
    const kwhMonth = totalKwh / 12;

    const per = {
      d: priceTTC(period.d, kwhTTC, kwhDay),
      m: priceTTC(period.m, kwhTTC, kwhMonth),
      y: priceTTC(period.y, kwhTTC, totalKwh),
    };

    return per;
  }, [period, kwhTTC, totalKwh]);
  return { priceTTCPer };
};

export default usePriceTTCPerPeriod;
