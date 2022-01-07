import { FC } from "react";

const Border: FC = ({ children }) => {
  return (
    <>
      <div className="flex mx-8">
        <div className="w-full mx-auto max-w-7xl">{children}</div>
      </div>
    </>
  );
};
export default Border;
