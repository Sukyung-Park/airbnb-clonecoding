import "../App.css";
import React from "react";
import HostHead from "../component/HostHead";
import HostFooter from "../component/HostFooter";
import HostRoad from "../component/HostRoad";
import HostOneto from "../component/HostOneto";
import HostInfo from "../component/HostInfo";
import Reacts, { useEffect } from "react";
import HostHelp from "../component/HostHelp";
import HostReady from "../component/HostReady";
import HostStart from "../component/HostStart";
import HostManner from "../component/HostManner";
import styled from "styled-components";

function HostPage() {
  useEffect(() => {
    console.log("호스트화면 진입했을 때 나타남!");
  });

  return (
    <div className=" HostPage">
      <HostHead />
      <HostRoad />
      <HostOneto />
      <HostInfo />
      <HostHelp />
      <HostReady />
      <HostStart />
      <HostManner />
      <HostFooterStyled>
        <HostFooter />
      </HostFooterStyled>
    </div>
  );
}

const HostFooterStyled = styled.div`
  position: relative;
  top: -100px;
`;
export default HostPage;
