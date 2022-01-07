import { FC } from "react";
import { LineItem } from "../../types";

type Props = {
  show: boolean;
  item: LineItem;
  incrementStep: () => void;
  decrementStep: () => void;
};

const AllocateItem: FC<Props> = ({
  show,
  item,
  incrementStep,
  decrementStep,
}) => {
  return (
    <>
      {show && (
        <div>
          <h1 className="text-white text-xl">{item.descClean}</h1>
          <div className="flex">
            <button
              className="bg-slate-300 py-2 px-4 text-lg"
              onClick={decrementStep}
            >
              Back
            </button>

            <button
              className="bg-slate-300 ml-auto py-2 px-4 text-lg"
              onClick={incrementStep}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default AllocateItem;
