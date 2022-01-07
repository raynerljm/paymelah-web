/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import MyHead from "../MyHead";
import Body from "../Layout/Body";
import Navbar from "../Layout/Navbar";
import Border from "../Layout/Border";

const Loading: FC = () => {
  return (
    <>
      <MyHead />
      <Body>
        <Navbar location="split" />
        <Border>
          <div className="h-[80vh] flex flex-col justify-center items-center text-white mt-20">
            <h1 className="text-center text-2xl font-bold">Loading...</h1>
          </div>
        </Border>
      </Body>
    </>
  );
};
export default Loading;
