import { useMemo } from "react";

const useKwhTTC = (kwh: number, ticgn: number) => {
  const kwhTTC = useMemo(() => {
    const tva = (v: number) => v + v * 0.2;
    const total = kwh + ticgn;
    return tva(total);
  }, [kwh, ticgn]);
  return kwhTTC;
};

export default useKwhTTC;
