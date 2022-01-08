import { FC } from "react";
import { scrollToTop } from "../../functions";
import { User } from "../../types";
import Button from "../Forms/Button";
import UserCard from "../UserCard/UserCard";
import UserCardAdd from "../UserCard/UserCardAdd";
import { Transition } from "@headlessui/react";

type Props = {
  show: boolean;
  users: User[];
  updateUser: (id: number, newName: string) => void;
  deleteUser: (id: number) => void;
  addUser: () => void;
  previousStep: () => void;
  nextStep: () => void;
};

const ManageUsers: FC<Props> = ({
  show,
  users,
  updateUser,
  deleteUser,
  addUser,
  previousStep,
  nextStep,
}) => {
  return (
    <>
      <Transition
        show={show}
        enter="transition-opacity duration-150"
        enterFrom="opacity-40"
        enterTo="opacity-100"
      >
        <div>
          <h1 className="py-2 split-header text-center w-full font-bold text-white">
            Users Splitting
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
          <div className="flex mt-4">
            <Button className="button" onClick={previousStep}>
              Back
            </Button>

            <Button
              className="button ml-auto"
              onClick={() => {
                nextStep();
                scrollToTop();
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </Transition>
    </>
  );
};
export default ManageUsers;
