import type { NextPage } from "next";
import Head from "next/head";

//Components
import MyHead from "../components/MyHead";
import Navbar from "../components/Layout/Navbar";
import Landing from "../components/HomeSections/LandingPage";
import Body from "../components/Layout/Body";
import Border from "../components/Layout/Border";
import Features from "../components/HomeSections/Features";
import Telebot from "../components/HomeSections/Telebot";
import AboutUs from "../components/HomeSections/AboutUs";
import TextInput from "../components/Forms/TextInput";
const Home: NextPage = () => {
  return (
    <>
      <MyHead />
      <Body>
        <Navbar location="home" />
        <Border>
          <Landing />
          <Features />
          <Telebot />
          <AboutUs />
        </Border>
      </Body>
    </>
  );
};
export default Home;
