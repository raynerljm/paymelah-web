import type { NextPage } from "next";
import { useState, useEffect } from "react";
import useUrlData from "../../../hooks/useUrlData";
import { LineItem, User } from "../../../types";
import ManageItems from "../../../components/Steps/1-ManageItems";
import UserCard from "../../../components/UserCard/UserCard";
import UserCardAdd from "../../../components/UserCard/UserCardAdd";
import ManageUsers from "../../../components/Steps/2-ManageUsers";
import AllocateItem from "../../../components/Steps/3-AllocateItem";

const Split: NextPage = () => {
  const {
    loading,
    lineItems: initialLineItems,
    chatId,
    users: initialUsers,
  } = useUrlData();
  const [lineItems, setLineItems] = useState<LineItem[]>(initialLineItems);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [step, setStep] = useState(1);

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
      descClean: `new_item_${lineItems.length + 1}`,
      lineTotal: 0,
      qty: 1,
      newAddition: true,
    };
    const newLineItems = [...lineItems, newItem];
    setLineItems(newLineItems);
  };

  const deleteUser = (id: number) => {
    if (id === -1) return;
    const newUsers = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUsers);
  };

  const updateUser = (id: number, newName: string) => {
    if (id === -1) return;
    const newUsers = users.map((user) => {
      if (user.id === id) {
        const newUser: User = {
          id,
          name: newName,
          newAddition: false,
          items: [],
        };
        return newUser;
      }
      return user;
    });
    setUsers(newUsers);
  };

  const addUser = () => {
    const previousMaxId = Math.max(...users.map((item) => item.id || 0));
    const newUser: User = {
      id: previousMaxId + 1,
      name: `user_${users.length + 1}`,
      newAddition: true,
      items: [],
    };
    const newUsers = [...users, newUser];
    setUsers(newUsers);
  };

  const addItemToUser = (userId: number, item: LineItem) => {
    const newUsers = users.map((user) => {
      if (user.id === userId) {
        const newUser = { ...user };
        newUser.items.push(item);
        return newUser;
      } else {
        return user;
      }
    });
    setUsers(newUsers);
  };

  const removeItemFromUser = (userId: number, itemId: number) => {
    const newUsers = users.map((user) => {
      if (user.id === userId) {
        const newUser = { ...user };
        const newItems = newUser.items.filter((item) => item.id !== itemId);
        newUser.items = newItems;
        return newUser;
      } else {
        return user;
      }
    });
    setUsers(newUsers);
  };

  return (
    <div className="min-h-screen w-full bg-dark">
      {step === 1 && (
        <ManageItems
          lineItems={lineItems}
          updateLineItem={updateLineItem}
          deleteLineItem={deleteLineItem}
          addLineItem={addLineItem}
          nextStep={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <ManageUsers
          users={users}
          updateUser={updateUser}
          deleteUser={deleteUser}
          addUser={addUser}
          previousStep={() => setStep(1)}
          nextStep={() => setStep(3)}
        />
      )}
      {lineItems.map((item, index) => {
        return (
          <AllocateItem
            key={item.id}
            users={users}
            item={item}
            show={step === index + 3}
            number={index + 1}
            addItemToUser={addItemToUser}
            removeItemFromUser={removeItemFromUser}
            incrementStep={() => setStep((step) => step + 1)}
            decrementStep={() => setStep((step) => step - 1)}
          />
        );
      })}
    </div>
  );
};
export default Split;
