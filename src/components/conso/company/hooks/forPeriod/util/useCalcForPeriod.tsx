import { useMemo } from "react";
type Period = {
  d: number;
  m: number;
  y: number;
};
const useCalcForPeriod = ({ ...per }: Period, p: number) => {
  const period = useMemo(() => {
    const d = per.d * p;
    const m = per.m * p;
    const y = per.y * p;
    return { d, m, y };
  }, [per.d, per.m, per.y, p]);
  return period;
};

export default useCalcForPeriod;
