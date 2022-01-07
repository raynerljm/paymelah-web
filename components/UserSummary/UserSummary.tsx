import { FC } from "react";
import { User } from "../../types";

type Props = {
  user: User;
};

const UserSummary: FC<Props> = ({ user }) => {
  const sumOfItems = user.items.reduce((acc, item) => acc + item.lineTotal, 0);

  return (
    <>
      <div className="bg-slate-300 py-2 px-4 flex flex-col">
        <div className="flex font-bold mb-2">
          <span>{user.name}</span>
          <span className="ml-auto">{sumOfItems.toFixed(2)}</span>
        </div>
        <div className="flex flex-col gap-2">
          {user.items.map((item) => {
            return (
              <div key={item.id} className="flex bg-slate-400">
                <span>{item.descClean}</span>
                <span className="ml-auto">{item.lineTotal.toFixed(2)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default UserSummary;
