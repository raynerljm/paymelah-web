import type { NextPage } from "next";
import { useState, useEffect } from "react";
import useUrlData from "../../../hooks/useUrlData";
import { LineItem, User } from "../../../types";
import { BOT_TOKEN, TELEGRAM_API } from "../../../constants";
import MyHead from "../../../components/MyHead";
import Body from "../../../components/Layout/Body";
import Border from "../../../components/Layout/Border";
import Navbar from "../../../components/Layout/Navbar";
import Error from "../../../components/Steps/0-Error";
import ManageItems from "../../../components/Steps/1-ManageItems";
import ManageUsers from "../../../components/Steps/2-ManageUsers";
import AllocateItem from "../../../components/Steps/3-AllocateItem";
import Summary from "../../../components/Steps/4-Summary";
import Thanks from "../../../components/Steps/5-Thanks";
import Loading from "../../../components/Steps/0-Loading";

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
      descClean: `New Item ${lineItems.length + 1}`,
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
      name: `New User ${users.length + 1}`,
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

  const confirmSplit = (
    users: User[],
    phoneNumber: string,
    acceptedMethods: string[]
  ) => {
    console.log(users, phoneNumber, acceptedMethods);
    console.log(BOT_TOKEN);
    console.log(chatId);

    const formattedText = `💸💸💸 Pls Pay Me Lah 💸💸💸\n\n${users
      .map((user) => {
        return `🔘 ${user.name} - ${user.items
          .reduce((acc, item) => acc + item.lineTotal, 0)
          .toFixed(2)}\n`;
      })
      .join("")}\n${
      acceptedMethods.length > 0
        ? `ℹ️ Accepted Payment methods:\n${acceptedMethods
            .map((a) => "• " + a + "\n")
            .join("")}`
        : ""
    }\n${phoneNumber !== null ? `ℹ️ Payee Number:\n• ${phoneNumber}` : ""}`;

    const sendMessageOnBot = async () => {
      await fetch(`${TELEGRAM_API}/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chat_id: chatId, text: formattedText }),
      });
    };
    console.log(formattedText);
    sendMessageOnBot();
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <MyHead />
      <Body>
        <Navbar location="split" />
        <Border>
          <div className="min-h-screen mt-20 w-full bg-transparent">
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
            {step === 3 + lineItems.length && (
              <Summary
                lineItems={lineItems}
                users={users}
                decrementStep={() => setStep((step) => step - 1)}
                incrementStep={() => setStep((step) => step + 1)}
                confirmSplit={confirmSplit}
              />
            )}
            {step === 4 + lineItems.length && <Thanks />}
          </div>
        </Border>
      </Body>
    </>
  );
};
export default Split;
