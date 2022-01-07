import { FC, useState } from "react";
import Card from "../Card";
import TextInput from "../Forms/TextInput";
import { FaTimes } from "react-icons/fa";
import { User } from "../../types";

type Props = {
  user: User;
  close: () => void;
  updateUser: (id: number, newName: string) => void;
};

const UserCard: FC<Props> = ({ user, close, updateUser }) => {
  const [newUsername, setNewUsername] = useState(user.name);

  return (
    <>
      <Card>
        <span>
          @<TextInput value={newUsername} update={setNewUsername} />
        </span>
        <span className="ml-auto">
          <FaTimes
            onClick={() => {
              updateUser(user.id !== undefined ? user.id : -1, newUsername);
              close();
            }}
          />
        </span>
      </Card>
    </>
  );
};
export default UserCard;
