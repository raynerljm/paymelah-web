import { Dispatch, FC, SetStateAction } from "react";
import { User, LineItem } from "../../types";

type Props = {
  user: User;
  item: LineItem;
  hasItem: boolean;
  addItemToUser: (userId: number, item: LineItem) => void;
  removeItemFromUser: (userId: number, itemId: number) => void;
};

const UserSelectCheckbox: FC<Props> = ({
  user,
  item,
  hasItem,
  addItemToUser,
  removeItemFromUser,
}) => {
  return (
    <>
      <div
        className={`${hasItem ? "bg-green-200" : "bg-red-200"} py-2 px-4`}
        onClick={() => {
          if (hasItem) {
            removeItemFromUser(user.id, item.id);
          } else {
            addItemToUser(user.id, item);
          }
        }}
      >
        {user.name}
      </div>
    </>
  );
};
export default UserSelectCheckbox;
