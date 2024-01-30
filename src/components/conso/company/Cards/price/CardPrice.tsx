import { Period } from "../../types/companyTypes";
interface Props {
  priceTTC: Period;
  // consumption: number;

  isPeriod: string;
  periodValue: number;
}

const CardPrice: React.FC<Props> = ({
  priceTTC,
  // consumption,
  isPeriod,
  // periodValue,
}) => {
  const consoPerPeriod = () => {
    if (isPeriod === "perDay") return priceTTC.d;
    if (isPeriod === "perMonth") return priceTTC.m;
    if (isPeriod === "perYear") return priceTTC.y;
  };

  return (
    <div className="card-section-price">
      <div className="flex justify-center items-center">
        <h3 className="text-4xl font-bold tracking-wide text-center">
          {consoPerPeriod()?.toFixed(2)}
          <span className="text-lg">€/ttc</span>
        </h3>
      </div>
    </div>
  );
};

export default CardPrice;
