import { CompanyResultsType } from "../../types/companyTypes";
import CardTaxesLine from "./CardTaxesLine";
interface Props {
  results: CompanyResultsType;
  isPeriod: string;
}
const CardTaxes: React.FC<Props> = ({ results, isPeriod }) => {
  const { aboTTC, TICGNper, kwhTTC } = results;

  type Period = {
    d: number;
    m: number;
    y: number;
  };

  const checkPeriod = (valObj: Period) => {
    if (isPeriod === "perDay") return valObj.d;
    if (isPeriod === "perMonth") return valObj.m;
    if (isPeriod === "perYear") return valObj.y;
  };

  return (
    <div className="card-section-taxes">
      <div>
        <div className="card-title">
          <h3 className="font-bold text-xl">Détails prix</h3>
        </div>
      </div>
      <div className="px-2">
        <CardTaxesLine title="Abo. TTC" value={checkPeriod(aboTTC)} />
        <CardTaxesLine title="Kwh TTC" value={kwhTTC} />
        <CardTaxesLine title="TICGN HT" value={checkPeriod(TICGNper.ht)} />
        <CardTaxesLine title="TICGN TTC" value={checkPeriod(TICGNper.ttc)} />
      </div>
    </div>
  );
};

export default CardTaxes;
