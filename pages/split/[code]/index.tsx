import type { NextPage } from "next";
import { useState, useEffect } from "react";
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
    <div>
      <h1>Please review your items</h1>
      {lineItems.map((item) => {
        return <div key={item.descClean}>{item.descClean}</div>;
      })}
    </div>
  );
};
export default Split;
