interface Props {
  title: string;
  value: number;
}

const ConsoResultDetail: React.FC<Props> = ({ title, value }) => (
  <div className="flex justify-between border-b border-neutral-500 mt-2">
    <span className="text-neutral-500"> {title} </span>
    <span className="font-bold text-lg">{value.toFixed(4)} €</span>
  </div>
);

export default ConsoResultDetail;
