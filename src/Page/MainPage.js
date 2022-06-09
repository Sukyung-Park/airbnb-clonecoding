import "../App.css";
import SubHead from "../component/SubHead";
import AirbnbMenu from "../component/AirbnbMenu";
import MainSearchStart from "../component/MainSearchStart";
import MainProvideUk from "../component/MainProvideUk";
import MainLetGo from "../component/MainLetGo";
import MainIdea from "../component/MainIdea";
import Around from "../component/Around";
import Question from "../component/Question";
import React, { useEffect, useState } from "react";
import HostFooter from "../component/HostFooter";
import styled from "styled-components";

function MainPage() {
  useEffect(() => {
    console.log("메인화면 진입했을 때 나타남!");
  });

  return (
    <div className="App">
      <SubHead />
      <AirbnbMenu />
      <MainSearchStart />
      <MainProvideUk />
      <MainLetGo />
      <MainIdea />
      <Around />
      <Question />
      <StyledFooter>
        <HostFooter />
      </StyledFooter>
    </div>
  );
}

const StyledFooter = styled.div`
  position: relative;
  top: 100px;
`;
export default MainPage;
