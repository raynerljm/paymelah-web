/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

type Props = {
  location: "item" | "user";
};

const Card: FC<Props> = ({ children, location }) => {
  return (
    <div className="item-card px-6 py-4 text-lg  font-semibold rounded-xl flex items-center gap-3">
      <img
        className="h-30 rounded-lg"
        src={`${
          location === "item"
            ? "/shopping-bag.png"
            : location === "user"
            ? "/user.png"
            : ""
        }`}
        alt="image"
        width={30}
        height={30}
      />
      {children}
    </div>
  );
};
export default Card;
