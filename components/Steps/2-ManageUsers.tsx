import { FC } from "react";
import { User } from "../../types";
import UserCard from "../UserCard/UserCard";
import UserCardAdd from "../UserCard/UserCardAdd";
import UserCardEdit from "../UserCard/UserCardEdit";

type Props = {
  users: User[];
  updateUser: (id: number, newName: string) => void;
  deleteUser: (id: number) => void;
  addUser: () => void;
  previousStep: () => void;
  nextStep: () => void;
};

const ManageUsers: FC<Props> = ({
  users,
  updateUser,
  deleteUser,
  addUser,
  previousStep,
  nextStep,
}) => {
  return (
    <>
      <div>
        <h1 className="text-xl text-white">
          Please add the users splitting the bill
        </h1>
        <div className="flex flex-col gap-2">
          {users.map((user) => {
            return (
              <UserCard
                key={user.id}
                user={user}
                updateUser={updateUser}
                deleteUser={deleteUser}
              />
            );
          })}
          <UserCardAdd addUser={addUser} />
        </div>
        <div className="flex">
          <button
            className="bg-slate-300 py-2 px-4 text-lg"
            onClick={previousStep}
          >
            Back
          </button>

          <button
            className="bg-slate-300 ml-auto py-2 px-4 text-lg"
            onClick={nextStep}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
export default ManageUsers;
