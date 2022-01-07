import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import type { URLData } from "../types";

const emptyData = {
  lineItems: [
    {
      qty: 0,
      descClean: "Loading...",
      lineTotal: 0,
    },
  ],
  chatId: "dummyChatId",
  users: [],
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

  useEffect(() => {
    if (!router) return;
    const dummyQuery = btoa(JSON.stringify(dummyData));
    const decodedString = window.atob(dummyQuery as string);
    let decodedJson;
    try {
      decodedJson = JSON.parse(decodedString);
    } catch (error) {
      decodedJson = "Invalid JSON file";
    }
    setData(decodedJson);
    setLoading(false);
  }, [router]);

  return {
    loading,
    lineItems: data.lineItems,
    chatId: data.chatId,
    users: data.users,
  };
};

export default useUrlData;
