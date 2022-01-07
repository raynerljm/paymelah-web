import { FC, useState } from "react";
import Card from "../Forms/Card";
import TextInput from "../Forms/TextInput";
import { FaCheck, FaTimes } from "react-icons/fa";
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
      <Card location="user">
        <span className="flex items-center gap-1">
          @<TextInput value={newUsername} update={setNewUsername} />
        </span>
        <span className="ml-auto">
          <FaCheck
            onClick={() => {
              updateUser(user.id !== undefined ? user.id : -1, newUsername);
              close();
            }}
            className="text-green-700 cursor-pointer hover:scale-110 transition-all"
          />
        </span>
      </Card>
    </>
  );
};
export default UserCard;
