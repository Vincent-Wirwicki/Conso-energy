interface Props {
  title: string;
  value: number | undefined;
}
const CardTaxesLine: React.FC<Props> = ({ title, value }) => {
  if (!value) return <div>incorrect value</div>;
  return (
    <div className="card-taxes-line">
      <span className=""> {title} </span>
      <span className="font-bold ">
        {value > 1 ? value.toFixed(2) : value.toFixed(4)} €
      </span>
    </div>
  );
};
export default CardTaxesLine;
