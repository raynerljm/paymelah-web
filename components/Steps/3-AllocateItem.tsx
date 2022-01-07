import { FC } from "react";
import { User, LineItem } from "../../types";
import UserSelect from "../UserSelect/UserSelect";

type Props = {
  show: boolean;
  users: User[];
  item: LineItem;
  number: number;
  addItemToUser: (userId: number, item: LineItem) => void;
  removeItemFromUser: (userId: number, itemId: number) => void;
  changeLineItemSharers: (id: number, action: "+" | "-") => void;
  updateSharedItemValue: (id: number) => void;
  incrementStep: () => void;
  decrementStep: () => void;
};

const AllocateItem: FC<Props> = ({
  show,
  users,
  item,
  number,
  addItemToUser,
  removeItemFromUser,
  changeLineItemSharers,
  updateSharedItemValue,
  incrementStep,
  decrementStep,
}) => {
  return (
    <>
      {show && (
        <div>
          <h1 className="text-white text-xl">
            {number}. {item.descClean} ({item.lineTotal}) ({item.sharers})
          </h1>
          <UserSelect
            users={users}
            currentItem={item}
            addItemToUser={addItemToUser}
            removeItemFromUser={removeItemFromUser}
            changeLineItemSharers={changeLineItemSharers}
            updateSharedItemValue={updateSharedItemValue}
          />

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
