import { FC } from "react";

const Body: FC = ({ children }) => {
  return (
    <>
    <div className="w-full svg-bg flex justify-center overflow-hidden">
      <div className="w-screen min-h-screen bg-svg">{children}</div>
      </div>
    </>
  );
};
export default Body;
