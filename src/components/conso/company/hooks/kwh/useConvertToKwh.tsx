import { useMemo } from "react";

const useConvertToKwh = (m3: number, coef: number) => {
  const totalKwh = useMemo(() => {
    return m3 * coef;
  }, [m3, coef]);
  return totalKwh;
};

export default useConvertToKwh;
