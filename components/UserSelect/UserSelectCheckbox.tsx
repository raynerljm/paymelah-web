import { Dispatch, FC, SetStateAction } from "react";
import { FaCheck } from "react-icons/fa";
import { User, LineItem } from "../../types";

type Props = {
  user: User;
  item: LineItem;
  hasItem: boolean;
  addItemToUser: (userId: number, item: LineItem) => void;
  removeItemFromUser: (userId: number, itemId: number) => void;
  changeLineItemSharers: (id: number, action: "+" | "-") => void;
  updateSharedItemValue: (id: number) => void;
};

const UserSelectCheckbox: FC<Props> = ({
  user,
  item,
  hasItem,
  addItemToUser,
  removeItemFromUser,
  changeLineItemSharers,
  updateSharedItemValue,
}) => {
  const usersItem = user.items.filter((a) => a.id === item.id)[0];

  const totalAccumulated = (user: User) =>
    user.items.reduce((acc, item) => acc + item.lineTotal, 0).toFixed(2);

  return (
    <>
      <div
        className={`${
          hasItem ? "bg-green-200 shadow-inner" : "bg-white"
        } py-3 px-5 text-xl flex items-center transition-all cursor-pointer`}
        onClick={() => {
          if (hasItem) {
            removeItemFromUser(user.id, item.id);
            changeLineItemSharers(item.id, "-");
            updateSharedItemValue(item.id);
          } else {
            addItemToUser(user.id, item);
            changeLineItemSharers(item.id, "+");
            updateSharedItemValue(item.id);
          }
        }}
      >
        <div>
          <span className="font-bold">{user.name}</span>
          <br />
          Total: SGD {totalAccumulated(user)}
        </div>
        <FaCheck
          className={`ml-auto text-2xl text-green-600 transition-all ${
            hasItem ? "" : "hidden"
          }`}
        />
      </div>
    </>
  );
};
export default UserSelectCheckbox;
