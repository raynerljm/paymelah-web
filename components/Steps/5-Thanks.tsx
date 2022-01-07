import { FC } from "react";
import Link from "next/link";

type Props = {};

const Thanks: FC<Props> = () => {
  return (
    <>
      <div>
        <div className="text-xl text-white">Thank you for using PayMeLah!</div>
        <p className="text-white">
          The PayMeLah Telegram Bot has sent your confirmation details to your
          chat. Do check it out!
        </p>
        <button className="text-white">
          <Link href="/">Home</Link>
        </button>
      </div>
    </>
  );
};
export default Thanks;
