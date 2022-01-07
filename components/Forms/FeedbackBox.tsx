import { FC } from "react";

type Props = {
  show: boolean;
  message: string;
};

const FeedbackBox: FC<Props> = ({ show, message }) => {
  return (
    <>
      {show && (
        <div className="py-3 px-6 rounded-lg bg-red-300 mb-4">{message}</div>
      )}
    </>
  );
};
export default FeedbackBox;
