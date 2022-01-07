import { FC } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Button from "../Forms/Button";

const Features: FC = ({ children }) => {
  return (
    <div className="space mx-8 overflow-hidden">
      <div id="features" className="relative -top-24"></div>
      <div className="h-[80vh] lg:h-auto flex flex-col justify-center items-center">
        <h1 className="text-6xl pt-8 py-4 font-semibold text-center text-white">
          Features
        </h1>
        <p className="text-center text-white text-xl font-light mt-2 mb-16">
          Product Walkthrough
        </p>
      </div>

      <div className="grid lg:grid-cols-3  min-h-screen lg:h-auto">
        <div className="flex justify-center items-center h-full mt-8">
          <div className="flex flex-col w-4/5">
            <span className="text-4xl pt-8 font-semibold text-center text-white">
              Data Extraction
            </span>

            <span className="subtext pt-8 text-center text-white">
              Upload your receipt via our telegram bot and our API will scan the
              details and generate the list of the priced items.
            </span>

            <div className="mt-8 transform hover:scale-110 hover:-translate-y-16 transition-all flex justify-center">
              <br />
              <Fade direction="up">
                <Image
                  src="/Upload.png"
                  alt="Upload Icon"
                  layout="fixed"
                  width={200}
                  height={200}
                />
              </Fade>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-full mt-8">
          <div className="flex flex-col w-4/5">
            <span className="text-4xl pt-15 font-semibold text-center text-white">
              Expenses Splitting
            </span>

            <span className="subtext pt-8 text-center text-white">
              Easily split the bill with any group of friends based on their
              purchases!
            </span>

            <div className="mt-8 transform hover:scale-110 hover:-translate-y-16 transition-all flex justify-center">
              <Fade direction="up">
                <Image
                  src="/Bill.png"
                  alt="Bill Icon"
                  layout="fixed"
                  width={200}
                  height={200}
                />
              </Fade>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-full mt-8">
          <div className="flex flex-col w-4/5">
            <span className="text-4xl pt-8 font-semibold text-center text-white">
              Bill Generation 
            </span>

            <span className="subtext pt-8 text-center text-white">
              Confirm settlement to send the summarised bill tagged to each user
              via our telegram bot.
            </span>

            <div className="mt-8 transform hover:scale-110 hover:-translate-y-16 transition-all flex justify-center">
              <Fade direction="up">
                <Image
                  src="/Envelope.png"
                  alt="Upload Icon"
                  layout="fixed"
                  width={200}
                  height={200}
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="space"></div>
    </div>
  );
};

export default Features;
