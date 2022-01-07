import { Dispatch, FC, SetStateAction } from "react";
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

  return (
    <>
      <div
        className={`${hasItem ? "bg-green-200" : "bg-red-200"} py-2 px-4`}
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
        {user.name} {hasItem && usersItem.lineTotal.toFixed(2)}
      </div>
    </>
  );
};
export default UserSelectCheckbox;
