import { FC } from "react";
import { LineItem } from "../../types";
import LineItemCard from "../LineItemCard/LineItemCard";
import LineItemCardAdd from "../LineItemCard/LineItemCardAdd";
import LineItemCardEdit from "../LineItemCard/LineItemCardEdit";
import Button from "../../components/Forms/Button";
import { scrollToTop } from "../../functions";

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
      <h1 className="py-2 split-header text-center w-full font-bold text-white">
        Receipt Items
      </h1>
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
        <div className="flex mt-4">
          <Button
            className="ml-auto button"
            onClick={() => {
              nextStep();
              scrollToTop();
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
export default ManageItems;
