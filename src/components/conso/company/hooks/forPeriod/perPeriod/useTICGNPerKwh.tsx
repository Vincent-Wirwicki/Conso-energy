import { useMemo } from "react";

const useTICGNPerKwh = (tcgn: number, kwhHT: number, consoKWh: number) => {
  const ticgnPerKwh = useMemo(() => {
    const tva = (v: number) => v + v * 0.2;
    const kwhDay = consoKWh / 365;
    const kwhMonth = consoKWh / 12;

    const ht = {
      d: tcgn * kwhDay + kwhHT,
      m: tcgn * kwhMonth + kwhHT,
      y: tcgn * consoKWh + kwhHT,
    };

    const { d, m, y } = ht;

    const ttc = {
      d: tva(d),
      m: tva(m),
      y: tva(y),
    };

    return { ht, ttc };
  }, [kwhHT, consoKWh, tcgn]);
  return { ticgnPerKwh };
};

export default useTICGNPerKwh;
