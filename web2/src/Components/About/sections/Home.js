import React, { Suspense } from "react";
import styled from "styled-components";

// import CoverVideo from '../components/CoverVideo';
// import NavBar from '../components/NavBar';
// import Logo from './../components/Logo';

const CoverVideo = React.lazy(() => import("../components/CoverVideo"));
const NavBar = React.lazy(() => import("../components/NavBar"));
const Logo = React.lazy(() => import("../components/Logo"));

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Section id="home">
      <Suspense fallback={<></>}>
        <Logo />
        <NavBar />
        <CoverVideo />
      </Suspense>
    </Section>
  );
};

export default Home;
