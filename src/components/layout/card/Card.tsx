import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<Props> = ({ children, className }) => (
  <article className={"card " + className}>{children}</article>
);

export default Card;
