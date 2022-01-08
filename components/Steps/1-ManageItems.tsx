import { FC } from "react";
import { LineItem } from "../../types";
import LineItemCard from "../LineItemCard/LineItemCard";
import LineItemCardAdd from "../LineItemCard/LineItemCardAdd";
import LineItemCardEdit from "../LineItemCard/LineItemCardEdit";
import Button from "../../components/Forms/Button";
import { scrollToTop } from "../../functions";
import { Transition } from "@headlessui/react";

type Props = {
  show: boolean;
  lineItems: LineItem[];
  updateLineItem: (id: number, newDesc: string, newPrice: number) => void;
  deleteLineItem: (id: number) => void;
  addLineItem: () => void;
  nextStep: () => void;
};

const ManageItems: FC<Props> = ({
  show,
  lineItems,
  updateLineItem,
  deleteLineItem,
  addLineItem,
  nextStep,
}) => {
  return (
    <>
      <Transition
        show={show}
        enter="transition-opacity duration-150"
        enterFrom="opacity-40"
        enterTo="opacity-100"
      >
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
      </Transition>
    </>
  );
};
export default ManageItems;
