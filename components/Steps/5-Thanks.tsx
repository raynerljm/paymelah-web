/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Link from "next/link";

type Props = {};

const Thanks: FC<Props> = () => {
  return (
    <>
      <div className="h-[80vh] flex flex-col justify-center items-center text-white mt-20">
        <img src="/thank.png" alt="Empty" className="w-64 h-64" />
        <h1 className="text-center text-2xl font-bold">
          We hope you enjoyed using PayMeLah!
        </h1>
        <p className="text-lg mt-4 text-center">
          The PayMeLah Telegram Bot has sent your confirmation details to your
          chat.
        </p>
      </div>
    </>
  );
};
export default Thanks;
