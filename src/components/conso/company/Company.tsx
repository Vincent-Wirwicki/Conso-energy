import useCompany from "./hooks/useCompany";
import { CompanyType } from "./types/companyTypes";
import CardMain from "./Cards/CardMain";

type Props = {
  m3: number;
  period: number;
  isPeriod: string;
  company: CompanyType;
};

const Company: React.FC<Props> = ({ m3, period, isPeriod, company }) => {
  const { params, results, name } = company;
  const { results: dResults, companyInputParams } = useCompany(
    { m3, period },
    { ...params },
    { ...results }
  );

  return (
    
      <CardMain
        results={{ ...dResults }}
        name={name}
        // params={params}
        inputParams={{ ...companyInputParams }}
        periodValue={period}
        isPeriod={isPeriod}
      />
  
  );
};

export default Company;
