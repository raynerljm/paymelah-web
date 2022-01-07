import { FC } from "react";
import { LineItem } from "../../types";
import LineItemCard from "../LineItemCard/LineItemCard";
import LineItemCardAdd from "../LineItemCard/LineItemCardAdd";
import LineItemCardEdit from "../LineItemCard/LineItemCardEdit";
import Button from "../../components/Button"

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
      <div className="px-10 py-10">
        
        <h1 className="py-2 split-header text-center w-full font-bold text-white">Receipt Items</h1>
        <div className="flex flex-col gap-3">
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

          <Button
                className="ml-auto px-10 py-2 ps text-black font-bold max-w-max"
                onClick={nextStep}
              >
                Next
              </Button>

          </div>
        </div>
      </div>
    </>
  );
};
export default ManageItems;
