import type { NextPage } from "next";
import Head from "next/head";

//Components
import MyHead from "../components/MyHead"
import NavBar from "../components/Navbar"
import Landing from "../components/LandingPage"
import Body from "../components/Body"
import Border from "../components/Border"
import Features from "../components/Features"
import Telebot from "../components/Telebot"
import AboutUs from "../components/AboutUs"
import TextInput from "../components/Forms/TextInput"
const Home: NextPage = () => {
  return (
    <>
    <MyHead/>
    <Body>
    <NavBar/>
    <Border>
    <Landing/>
    <Features/>
    <Telebot />
    <AboutUs/>

      </Border>
    </Body>
    </>
  );
};
export default Home;
