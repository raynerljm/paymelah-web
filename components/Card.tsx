import { FC } from "react";

const Card: FC = ({ children }) => {
  return (
    <div className="bg-slate-300 py-2 px-4 text-xl rounded-lg flex items-center gap-2">
      {children}
    </div>
  );
};
export default Card;
