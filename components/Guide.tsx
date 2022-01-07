import { FC } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Button from "../components/Button";

const Guide: FC = ({ children }) => {
  return (
    <div className="mx-8 overflow-hidden" id="aboutus">
      <h1 className="text-6xl pt-8 py-4 font-semibold text-center text-white">
        Our Challenge
      </h1>
      <p className="text-center text-white text-lg font-light mt-2 mb-16">
        Waste Management: Hidden Microplastic Crystals
      </p>

      <div>
        <div className="grid grid-cols-2 h-4/5">
          <div className="flex justify-center items-center h-full">
            <Image
              src="/trash.jpeg"
              alt="Fish Icon"
              layout="fixed"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-white text-right text-5xl font-semibold">
              <span className="font-semibold">
                A Real
                <br />
                Problem
              </span>
            </h1>

            <div className="pl-10">
              <p className="text-right text-white text-lg font-light mt-6">
                <a
                  href="https://oceanservice.noaa.gov/facts/microplastics.html#:~:text=Microplastics%20are%20small%20plastic%20pieces,our%20ocean%20and%20aquatic%20life.&text=Plastic%20debris%20can%20come%20in,)%20are%20called%20%E2%80%9Cmicroplastics.%E2%80%9D"
                  className="link"
                  target="blank"
                  rel="noreferrer"
                >
                  Microplastic crystals
                </a>{" "}
                are invisible to the naked eye. With sizes down to microscopic 
                it has been ingested by a wide range of creatures in the marine
                widlife community and is still doing invisible damage today
              </p>
              <p className="text-right text-white text-lg font-light mt-6">
                According to the{" "}
                <a
                  href="https://feature.undp.org/plastic-tidal-wave/#:~:text=Every%20year%2C%20up%20to%2013,minute%2C%20according%20to%20UN%20Environment.&text=Plastic%20is%20especially%20lethal%20to%20coral%20reef%20systems."
                  target="blank"
                  rel="noreferrer"
                  className="link"
                >
                  UN Environment Programme
                </a>
                , 13 million tonnes of plastic leak into our oceans every year,
                causing an estimated $13 billion of economic damage to global
                marine ecosystems. Additionally, according to the{" "}
                <a
                  href="https://www.un.org/sustainabledevelopment/sustainable-consumption-production/"
                  target="blank"
                  rel="noreferrer"
                  className="link"
                >
                  UN SDG12
                </a>
                , 5 trillion plastic bags are thrown away each year and many end
                up in the oceans.
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>

      <div>
        <br />
        <br />
        <br />
      </div>
      <div>
        <br />
        <br />
        <h1 className="text-white text-center text-5xl font-semibold">
          <span className="font-semibold">Threat to the ocean wildlife</span>
        </h1>
        <br />
        <p className="text-center text-white text-lg font-light mt-6">
          According to{" "}
          <a
            href="https://www.nottingham.ac.uk/connectonline/research/2018/the-big-problem-of-microplastics.aspx"
            className="link"
            target="blank"
            rel="noreferrer"
          >
            Nottingham University
          </a>
          , many toxic chemicals can also adhere to the surface of plastic. If
          ingested, contaminated microplastics could expose organisms to high
          concentrations of toxins.
        </p>

        <p className="text-center text-white text-lg font-light mt-6">
          As more microplastics fill our marine environment, and are consumed by
          the creatures that inhabit our waters, greater concentrations of these
          plastic particles are entering our food chain.
        </p>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Guide;
