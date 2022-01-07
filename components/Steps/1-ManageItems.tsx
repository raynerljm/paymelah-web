import { FC } from "react";
import { LineItem } from "../../types";
import LineItemCard from "../LineItemCard/LineItemCard";
import LineItemCardAdd from "../LineItemCard/LineItemCardAdd";
import LineItemCardEdit from "../LineItemCard/LineItemCardEdit";

type Props = {
  lineItems: LineItem[];
  updateLineItem: (id: number, newDesc: string, newPrice: number) => void;
  deleteLineItem: (id: number) => void;
  addLineItem: () => void;
  nextStep: () => void;
};

const ManageItems: FC<Props> = ({
  lineItems,
  updateLineItem,
  deleteLineItem,
  addLineItem,
  nextStep,
}) => {
  return (
    <>
      <div>
        <h1 className="text-xl text-white">Please review your items</h1>
        <div className="flex flex-col gap-2">
          {lineItems.map((item) => {
            return (
              <LineItemCard
                key={item.id}
                item={item}
                updateLineItem={updateLineItem}
                deleteLineItem={deleteLineItem}
              />
            );
          })}
          <LineItemCardAdd addLineItem={addLineItem} />
          <div className="flex">
            <button
              className="bg-slate-300 ml-auto py-2 px-4 text-lg"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageItems;
