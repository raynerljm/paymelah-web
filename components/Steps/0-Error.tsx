/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import MyHead from "../MyHead";
import Body from "../Layout/Body";
import Navbar from "../Layout/Navbar";
import Border from "../Layout/Border";

const Error: FC = () => {
  return (
    <>
      <MyHead />
      <Body>
        <Navbar location="split" />
        <Border>
          <div className="h-[80vh] flex flex-col justify-center items-center text-white mt-20">
            <img src="/empty.png" alt="Empty" className="w-64 h-64" />
            <h1 className="text-center text-2xl font-bold">
              This is not a valid URL
            </h1>
            <p className="text-lg mt-4 text-center">
              Please go to{" "}
              <a
                href="https://t.me/PayMeLahBot"
                className="text-blue-300 underline font-bold"
              >
                @PayMeLahBot
              </a>{" "}
              on Telegram to try again.
            </p>
          </div>
        </Border>
      </Body>
    </>
  );
};
export default Error;
