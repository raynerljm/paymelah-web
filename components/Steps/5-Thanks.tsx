/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import MyTransition from "../Layout/MyTransition";
import Link from "next/link";

type Props = { show: boolean; invalidSplit: boolean };

const Thanks: FC<Props> = ({ show, invalidSplit }) => {
  return (
    <>
      <MyTransition show={show}>
        <div className="h-[80vh] flex flex-col justify-center items-center text-white mt-20">
          <img src="/thank.png" alt="Empty" className="w-64 h-64" />
          <h1 className="text-center text-2xl font-bold">
            We hope you enjoyed using PayMeLah!
          </h1>
          {!invalidSplit ? (
            <p className="text-lg mt-4 text-center">
              The PayMeLah Telegram Bot has sent your confirmation details to
              your chat.
            </p>
          ) : (
            <p className="text-lg mt-4 text-center">
              As no items were split between any of the users, the Telegram Bot
              will not send a confirmation message. Please try again.
            </p>
          )}
          <Link href="/" passHref>
            <button className="text-2xl font-bold text-black py-3 px-6 mt-8 select-none cursor-pointer rounded-md bg-white hover:bg-gradient">
              Home
            </button>
          </Link>
        </div>
      </MyTransition>
    </>
  );
};
export default Thanks;
