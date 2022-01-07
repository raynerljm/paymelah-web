import { FC } from "react";

const Card: FC = ({ children }) => {
  return (
    <div className="item-card px-7 py-4 text-xl  font-semibold rounded-xl flex items-center gap-2 uppercase">
      <img
                    className="h-30 rounded-lg"
                    src="/shopping-bag.png"
                    alt="image"
                    width={30}
                    height={30}
                  />
      {children}
    </div>
  );
};
export default Card;
