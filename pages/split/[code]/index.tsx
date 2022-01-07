import type { NextPage } from "next";
import { useState, useEffect } from "react";
import useUrlData from "../../../hooks/useUrlData";
import { LineItem, User } from "../../../types";
import ManageItems from "../../../components/Steps/1-ManageItems";
import UserCard from "../../../components/UserCard/UserCard";
import UserCardAdd from "../../../components/UserCard/UserCardAdd";
import ManageUsers from "../../../components/Steps/2-ManageUsers";
import AllocateItem from "../../../components/Steps/3-AllocateItem";
import Error from "../../../components/Steps/0-Error";

const Split: NextPage = () => {
  const {
    loading,
    lineItems: initialLineItems,
    chatId,
    users: initialUsers,
    error,
  } = useUrlData();
  const [lineItems, setLineItems] = useState<LineItem[]>(initialLineItems);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (loading || error) return;
    setLineItems(initialLineItems);
    setUsers(initialUsers);
  }, [initialLineItems, initialUsers, loading]);

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
      sharers: 0,
    };
    const newLineItems = [...lineItems, newItem];
    setLineItems(newLineItems);
  };

  const changeLineItemSharers = (id: number, action: "+" | "-") => {
    const newItems = lineItems.map((item) => {
      if (item.id === id) {
        if (action === "+") {
          item.sharers++;
        } else if (action === "-") {
          item.sharers--;
        }
      }
      return item;
    });
    setLineItems(newItems);
  };

  const updateSharedItemValue = (id: number) => {
    const sharedItem = lineItems.filter((item) => item.id === id)[0];
    const sharers = sharedItem.sharers;
    const originalPrice = sharedItem.lineTotal;
    const sharedPrice = originalPrice / sharers;
    const newUsers: User[] = users.map((user) => {
      user.items = user.items.map((item) => {
        if (item.id === id) {
          item.lineTotal = sharedPrice;
        }
        return item;
      });
      return user;
    });
    console.log(newUsers);
    setUsers(newUsers);
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
        user.name = newName;
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
        user.items.push({ ...item });
      }
      return user;
    });
    setUsers(newUsers);
  };

  const removeItemFromUser = (userId: number, itemId: number) => {
    const newUsers = users.map((user) => {
      if (user.id === userId) {
        user.items = user.items.filter((item) => item.id !== itemId);
      }
      return user;
    });
    setUsers(newUsers);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <Error />;

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
            changeLineItemSharers={changeLineItemSharers}
            updateSharedItemValue={updateSharedItemValue}
            incrementStep={() => setStep((step) => step + 1)}
            decrementStep={() => setStep((step) => step - 1)}
          />
        );
      })}
    </div>
  );
};
export default Split;
