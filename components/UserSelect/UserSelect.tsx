import { FC } from "react";
import { User, LineItem } from "../../types";
import UserSelectCheckbox from "./UserSelectCheckbox";

type Props = {
  users: User[];
  currentItem: LineItem;
  addItemToUser: (userId: number, item: LineItem) => void;
  removeItemFromUser: (userId: number, itemId: number) => void;
};

const UserSelect: FC<Props> = ({
  users,
  currentItem,
  addItemToUser,
  removeItemFromUser,
}) => {
  const userContainsItem = (user: User) => {
    let res = false;
    for (const item of user.items) {
      if (item.id === currentItem.id) {
        res = true;
        break;
      }
    }
    return res;
  };

  return (
    <>
      <div>
        {users.map((user) => (
          <UserSelectCheckbox
            key={user.id}
            user={user}
            item={currentItem}
            hasItem={userContainsItem(user)}
            addItemToUser={addItemToUser}
            removeItemFromUser={removeItemFromUser}
          />
        ))}
      </div>
    </>
  );
};
export default UserSelect;
