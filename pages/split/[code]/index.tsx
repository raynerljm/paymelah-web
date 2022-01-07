import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Split: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router) return;
    const dummyQuery = btoa(JSON.stringify({ chatId: "123" }));
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

  if (loading) return <div>Loading...</div>;

  return <div>{console.log(data)}Look at console for the data</div>;
};
export default Split;
