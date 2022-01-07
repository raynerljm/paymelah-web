import { FC, useState } from "react";
import { User } from "../../types";

type Props = {
  user: User;
};

const UserSummary: FC<Props> = ({ user }) => {
  const sumOfItems = user.items
    .reduce((acc, item) => acc + item.lineTotal, 0)
    .toFixed(2);

  return (
    <>
      <div className="bg-slate-100 rounded-lg mt-2 mx-2 flex flex-col">
        <div className="flex font-bold mb-2 px-4 pt-2">
          <span className="uppercase">@{user.name}</span>
          <span className="ml-auto flex items-center gap-1">
            SGD {sumOfItems}
          </span>
        </div>
        {user.items.length > 0 && (
          <div className="flex flex-col gap-1 bg-slate-300 text-sm w-full rounded-b-lg px-4 py-2">
            {user.items.map((item) => {
              const lineTotalShortened = item.lineTotal.toFixed(2);

              return (
                <div key={item.id} className="flex">
                  <span className="capitalize">{item.descClean}</span>
                  <span className="ml-auto flex items-center gap-1 transition-all">
                    SGD {lineTotalShortened}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default UserSummary;
