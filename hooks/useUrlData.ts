import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import type { LineItem, URLData } from "../types";

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
    const processedLineItems: LineItem[] = [];
    decodedJson.lineItems.forEach((item: LineItem) => {
      for (let i = 0; i < item.qty; i++) {
        processedLineItems.push({
          descClean: item.descClean,
          qty: 1,
          id: processedLineItems.length,
          lineTotal: item.lineTotal,
        });
      }
    });
    const processedJson = { ...decodedJson };
    processedJson.lineItems = processedLineItems;

    setData(processedJson);
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
