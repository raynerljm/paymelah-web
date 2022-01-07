import type { NextPage } from "next";
import { useState, useEffect } from "react";
import LineItemCard from "../../../components/LineItemCard";
import LineItemCardAdd from "../../../components/LineItemCardAdd";
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

  const deleteLineItem = (id: number) => {
    if (id === -1) return;
    const newLineItems = lineItems.filter((item) => {
      return item.id !== id;
    });
    setLineItems(newLineItems);
  };

  const updateLineItem = (id: number, newDesc: string, newPrice: number) => {
    if (id === -1) return;
    const newLineItems = lineItems.map((item) => {
      if (item.id === id) {
        item.descClean = newDesc;
        item.lineTotal = newPrice;
        const newItem = {
          id,
          descClean: newDesc,
          lineTotal: newPrice,
          qty: 1,
          newAddition: false,
        };
        return newItem;
      }
      return item;
    });
    setLineItems(newLineItems);
  };

  const addLineItem = () => {
    const previousMaxId = Math.max(...lineItems.map((item) => item.id || 0));
    const newItem: LineItem = {
      id: previousMaxId + 1,
      descClean: "New Item",
      lineTotal: 0,
      qty: 1,
      newAddition: true,
    };
    const newLineItems = [...lineItems, newItem];
    setLineItems(newLineItems);
  };

  return (
    <div className="min-h-screen w-full bg-dark">
      <h1 className="text-xl text-white">Please review your items</h1>
      <div className="flex flex-col gap-2">
        {lineItems.map((item) => {
          return (
            <LineItemCard
              key={item.id}
              item={item}
              updateLineItem={updateLineItem}
              deleteLineItem={deleteLineItem}
            />
          );
        })}
        <LineItemCardAdd addLineItem={addLineItem} />
      </div>
    </div>
  );
};
export default Split;
