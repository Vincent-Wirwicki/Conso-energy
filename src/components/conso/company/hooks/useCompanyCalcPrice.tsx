import useAboPerPeriod from "./forPeriod/perPeriod/useAboPerPeriod";
import useCalcForPeriod from "./forPeriod/util/useCalcForPeriod";
import useConvertToKwh from "./kwh/useConvertToKwh";
import useTICGNPerKwh from "./forPeriod/perPeriod/useTICGNPerKwh";
import usePriceTTCPerPeriod from "./forPeriod/perPeriod/usePriceTTCPerPeriod";
import useKwhTTC from "./kwh/useKwhTTC";

type CompanyParamsType = {
  coef: number;
  TICGN: number;
  CTA: number;
  kwhHT: number;
  aboHT: number;
};

type UserConso = {
  m3: number;
  period: number;
};

const useCompanyCalcPrice = (
  { m3, period }: UserConso,
  { coef, TICGN, CTA, kwhHT, aboHT }: CompanyParamsType
) => {
  const totalKwh = useConvertToKwh(m3, coef);
  const kwhTTC = useKwhTTC(TICGN, kwhHT);

  const { ticgnPerKwh } = useTICGNPerKwh(TICGN, kwhHT, totalKwh);
  const { aboPer } = useAboPerPeriod(aboHT, CTA);

  const { priceTTCPer } = usePriceTTCPerPeriod({
    period: { ...aboPer.ttc },
    kwhTTC: kwhTTC,
    totalKwh: totalKwh,
  });

  const priceTTC = useCalcForPeriod({ ...priceTTCPer }, period);

  const TICGNper = {
    ht: useCalcForPeriod({ ...ticgnPerKwh.ht }, period),
    ttc: useCalcForPeriod({ ...ticgnPerKwh.ttc }, period),
  };

  const aboTTC = useCalcForPeriod({ ...aboPer.ttc }, period);
  // ht: useCalcForPeriod({ ...aboPer.ht }, period),

  const data = { priceTTC, TICGNper, aboTTC, totalKwh, kwhTTC };
  return { data };
};

export default useCompanyCalcPrice;
