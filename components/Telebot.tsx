import { FC } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Button from "./Forms/Button";

const Telebot: FC = ({ children }) => {
  return (
    <div className="space mx-8 overflow-hidden" id="features">
      <h1 className="text-6xl pt-8 py-4 font-semibold text-center text-white">
        Our Telegram Bot
      </h1>
      <p className="text-center text-white text-xl font-light mt-2 mb-16">
        Seamless uploading of receipt images
      </p>

      <div className="space h-almost mx-7" id="home">
        <div className=" grid grid-cols-2 h-4/5">
          <div className="flex items-center justify-center h-full">
            <div className="transform hover:scale-110 hover:-translate-y-16 transition-all">
              <Fade direction="up">
                <Image
                  src="/Telegram.png"
                  alt="Telegram Icon"
                  layout="fixed"
                  width={300}
                  height={300}
                />
              </Fade>
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <h1 className="text-white text-left text-3xl font-semibold">
              <span className="font-semibold">
                You can access the telegram bot here.
              </span>
              <br />
              <br />
              <span>
                <Fade direction="up" delay={500}>
                  <div className="ml-auto">
                    <a
                      href="https://t.me/PayMeLahBot"
                      target="blank"
                      rel="noreferrer"
                    >
                      <Button className="px-10 py-2 bg-white text-black font-bold max-w-max">
                        Lets Go
                      </Button>
                    </a>
                  </div>
                </Fade>
              </span>
            </h1>
          </div>
        </div>
        <div className="space"></div>
      </div>

      <div className="space"></div>
    </div>
  );
};

export default Telebot;
