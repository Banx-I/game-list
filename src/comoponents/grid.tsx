import { ReactNode } from "react";

type Props = {
  columns?: number;
  children: ReactNode;
};

const Grid = ({ children, columns = 2 }: Props) => {
  return (
    <>
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${columns}, 2fr)` }}
      >
        {children}
      </div>
    </>
  );
};

export default Grid;