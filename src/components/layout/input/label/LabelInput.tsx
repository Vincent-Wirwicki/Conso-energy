interface Props {
  id: string;
  label: string;
  className?: string;
}

const LabelInput: React.FC<Props> = ({ id, label, className }) => {
  return (
    <label htmlFor={id} className={className}>
      {label}
    </label>
  );
};

export default LabelInput;
