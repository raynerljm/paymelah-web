import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import type { LineItem, URLData, User } from "../types";

const emptyData = {
  lineItems: [
    {
      qty: 0,
      id: 0,
      descClean: "Loading...",
      lineTotal: 0,
      newAddition: false,
      sharers: 0,
    },
  ],
  chatId: "dummyChatId",
  users: [
    {
      id: 0,
      name: "Loading...",
      newAddition: false,
      items: [],
    },
  ],
};

const dummyData = {
  lineItems: [
    {
      qty: 3,
      descClean: "Breakfast Deluxe",
      lineTotal: 8.9,
    },
    {
      qty: 3,
      descClean: "Hashbrowns",
      lineTotal: 1.2,
    },
    {
      qty: 1,
      descClean: "Coffee Black",
      lineTotal: 0.9,
    },
    {
      qty: 2,
      descClean: "Medium Iced Milo",
      lineTotal: 2.1,
    },
  ],
  chatId: "dummyChatId",
  users: ["raypuff"],
};

const useUrlData = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<URLData>(emptyData);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!router || !router.query.code) return;
    // const dummyQuery = btoa(JSON.stringify(dummyData));
    // const decodedString = window.atob(dummyQuery as string);

    try {
      const decodedString = window.atob(router.query.code as string);
      const decodedJson = JSON.parse(decodedString);
      const processedLineItems: LineItem[] = [];
      decodedJson.lineItems.forEach((item: LineItem) => {
        for (let i = 0; i < item.qty; i++) {
          processedLineItems.push({
            descClean: item.descClean,
            qty: 1,
            id: processedLineItems.length,
            lineTotal: item.lineTotal,
            newAddition: false,
            sharers: 0,
          });
        }
      });
      const processedUsers: User[] = [];
      for (let i = 0; i < decodedJson.users.length; i++) {
        processedUsers.push({
          id: i,
          name: decodedJson.users[i],
          newAddition: false,
          items: [],
        });
      }
      const processedJson = { ...decodedJson };
      processedJson.lineItems = processedLineItems;
      processedJson.users = processedUsers;

      setData(processedJson);
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }, [router]);

  return {
    loading,
    lineItems: data.lineItems,
    chatId: data.chatId,
    users: data.users,
    error,
  };
};

export default useUrlData;
