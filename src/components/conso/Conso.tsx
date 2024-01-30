import UserConso from "./userConso/UserConso";
import useInputNumber from "../layout/input/number/hooks/useInputNumber";
import useSelectInput from "../layout/input/select/hooks/useSelectInput";

import Company from "./company/Company";
import { CompanyType } from "./company/types/companyTypes";
import {
  companyInitResults,
  companyInitParams,
} from "./company/defaultData/companyDefault";
import { useState } from "react";

const Conso = () => {
  const conso = useInputNumber({
    id: "user-m3",
    label: "Conso de gaz en m3",
    val: 0,
  });

  const period = useInputNumber({
    id: "user-period",
    label: "pour",
    val: 1,
  });

  const selectPeriod = useSelectInput({
    id: "select-period",
    opts: [
      { label: "jours", value: "perDay" },
      { label: "mois", value: "perMonth" },
      { label: "an", value: "perYear" },
    ],
  });

  const companyDefault: CompanyType = {
    uid: 0,
    name: "GRDF",
    results: { ...companyInitResults },
    params: { ...companyInitParams },
  };

  const [companies, setCompanies] = useState<CompanyType[]>([
    { ...companyDefault },
  ]);

  const addCompany = () => {
    if (companies.length < 4)
      setCompanies(prev => [...prev, { ...companyDefault }]);
  };


  return (
    <>
      <div>
        <UserConso conso={conso} period={period} select={selectPeriod} />
      </div>
      <div className="wrap-card-main">
        {companies.map((company, index) => (
          <Company
            key={index}
            m3={conso.value}
            period={period.value}
            isPeriod={selectPeriod.value}
            company={company}
          />
        ))}
        {companies.length < 4 && (
          <div className="w-[450px] h-[600px] flex justify-center">
            <button
              className="border border-neutral-800 rounded-lg p-2 mt-5 w-32 h-16"
              onClick={addCompany}
            >
              Ajouter
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Conso;
