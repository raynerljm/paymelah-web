import type { NextPage } from "next";
import Head from "next/head";

//Components
import MyHead from "../components/MyHead"
import NavBar from "../components/Navbar"
import Landing from "../components/LandingPage"
import Body from "../components/Body"
import Border from "../components/Border"
import Features from "../components/Features"
import AboutUs from "../components/AboutUs"
const Home: NextPage = () => {
  return (
    <>
    <MyHead/>
    <Body>
    <NavBar/>
    <Border>
    <Landing/>
    <Features/>
    <AboutUs/>

      </Border>
    </Body>
    </>
  );
};
export default Home;
