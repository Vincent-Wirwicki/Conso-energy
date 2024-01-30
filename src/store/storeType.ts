type InputParam = {
  title: string;
  desc?: string;
  value: number;
};

export type Params = {
  kwh: InputParam;
  abo: InputParam;
  taxes: { TICGN: InputParam; CTA: InputParam };
};

export type InputParamsHT = Params;

export type OutputParamsTTC = Params;

export type Consumption = {
  m3: InputParam;
  //   kwh: InputParam;
  //   coef: InputParam;
};
