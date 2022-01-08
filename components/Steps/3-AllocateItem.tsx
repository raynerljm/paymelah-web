import { FC } from "react";
import { User, LineItem } from "../../types";
import Button from "../Forms/Button";
import UserSelect from "../UserSelect/UserSelect";
import MyTransition from "../Layout/MyTransition";

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
      <MyTransition show={show}>
        <div>
          <h1 className="py-2 split-header text-center w-full text-xl text-white">
            {number}. {item.descClean}
            <br />
            SGD {item.lineTotal.toFixed(2)}
          </h1>
          <h1 className="text-white text-4xl w-full text-center my-12 transition-all">
            SGD{" "}
            {(item.lineTotal / (item.sharers !== 0 ? item.sharers : 1)).toFixed(
              2
            )}
            <span className="text-3xl">
              <br />
              per person
            </span>
          </h1>
          <UserSelect
            users={users}
            currentItem={item}
            addItemToUser={addItemToUser}
            removeItemFromUser={removeItemFromUser}
            changeLineItemSharers={changeLineItemSharers}
            updateSharedItemValue={updateSharedItemValue}
          />

          <div className="flex mt-4">
            <Button className="button" onClick={decrementStep}>
              Back
            </Button>
            <Button className="button ml-auto" onClick={incrementStep}>
              Next
            </Button>
          </div>
        </div>
      </MyTransition>
    </>
  );
};
export default AllocateItem;
