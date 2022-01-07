import { FC } from "react";

type Props = {
  decrementStep: () => void;
};

const Number: FC<Props> = ({ decrementStep }) => {
  return (
    <>
      <div>
        <div className="text-xl text-white">Confirmation Page</div>
        <div className="flex">
          <button
            className="bg-slate-300 py-2 px-4 text-lg"
            onClick={decrementStep}
          >
            Back
          </button>

          <button className="bg-slate-300 ml-auto py-2 px-4 text-lg">
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};
export default Number;
