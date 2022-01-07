import { FC, useState } from "react";
import Card from "../Forms/Card";
import EditState from "./UserCardEdit";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { User } from "../../types";

type Props = {
  user: User;
  updateUser: (id: number, newName: string) => void;
  deleteUser: (id: number) => void;
};

const UserCard: FC<Props> = ({ user, updateUser, deleteUser }) => {
  const [editMode, setEditMode] = useState(user.newAddition);

  const NormalState = () => (
    <Card location="user">
      <span>@{user.name}</span>
      <span className="ml-auto flex gap-4">
        <FaEdit onClick={() => setEditMode(true)} />
        <FaTrashAlt
          onClick={() => deleteUser(user.id !== undefined ? user.id : -1)}
          className="text-red-600"
        />
      </span>
    </Card>
  );

  return (
    <>
      {!editMode ? (
        <NormalState />
      ) : (
        <EditState
          user={user}
          close={() => setEditMode(false)}
          updateUser={updateUser}
        />
      )}
    </>
  );
};
export default UserCard;
