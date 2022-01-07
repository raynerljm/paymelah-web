import { FC } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Button from "../components/Button";

const Guide: FC = ({ children }) => {
  return (
    <div className="space mx-8 overflow-hidden" id="aboutus">
      <h1 className="text-6xl pt-8 py-4 font-semibold text-center text-white">
        Features
      </h1>
      <p className="text-center text-white text-xl font-light mt-2 mb-16">
        Product Walkthrough
      </p>

      <div className="grid grid-cols-3 h-4/5">
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-rows-3 h-2/5 w-3/5">
            <span className="text-4xl pt-8 font-semibold text-center text-white">
              Data Extraction
            </span>

            <span className="subtext pt-8 text-center text-white">
              Upload a picture of your receipt and our API will scan the details and generate the list of the priced items.
            </span>

            <div className="py-3 transform hover:scale-110 hover:-translate-y-16 transition-all">
                <br/>
              <Fade direction="up">
                <Image
                  src="/Upload.png"
                  alt="Upload Icon"
                  layout="fixed"
                  width={250}
                  height={250}
                />
              </Fade>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-full">
          <div className="grid grid-rows-3 h-2/5 w-3/5">
            <span className="text-4xl pt-8 font-semibold text-center text-white">
              Expenses Splitting
            </span>

            <span className="subtext pt-8 text-center text-white">
              Easily split the bill with any group of friends based on their purchases!
            </span>

            <div className=" py-3 transform hover:scale-110 hover:-translate-y-16 transition-all">
              <Fade direction="up">
                <Image
                  src="/Bill.png"
                  alt="Bill Icon"
                  layout="fixed"
                  width={250}
                  height={250}
                />
              </Fade>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-full">
          <div className="grid grid-rows-3 h-2/5 w-3/5">
            <span className="text-4xl pt-8 font-semibold text-center text-white">
              Bill Generation
            </span>

            <span className="subtext pt-8 text-center text-white">
              Confirm settlement to send the summarised bill tagged to each user via our telegram bot.
            </span>
            

            <div className="py-3 transform hover:scale-110 hover:-translate-y-16 transition-all">
              <Fade direction="up">
                <Image
                  src="/Envelope.png"
                  alt="Upload Icon"
                  layout="fixed"
                  width={250}
                  height={250}
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

export default Guide;
