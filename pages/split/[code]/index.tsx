import type { NextPage } from "next";
import { useState, useEffect } from "react";
import LineItemCard from "../../../components/LineItemCard";
import useUrlData from "../../../hooks/useUrlData";
import { LineItem } from "../../../types";

const Split: NextPage = () => {
  const {
    loading,
    lineItems: initialLineItems,
    chatId,
    users: initialUsers,
  } = useUrlData();
  const [lineItems, setLineItems] = useState<LineItem[]>(initialLineItems);
  const [users, setUsers] = useState<string[]>(initialUsers);

  useEffect(() => {
    if (loading) return;
    setLineItems(initialLineItems);
    setUsers(initialUsers);
  }, [initialLineItems, initialUsers, loading]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen w-full bg-dark">
      <h1 className="text-xl text-white">Please review your items</h1>
      <div className="flex flex-col gap-2">
        {lineItems.map((item) => {
          return <LineItemCard key={item.descClean} item={item} />;
        })}
      </div>
    </div>
  );
};
export default Split;
