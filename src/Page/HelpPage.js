import "../App.css";
import React from "react";
import HelpHeader from "../component/HelpHeader";
import HelpWith from "../component/HelpWith";
import HelpAirbnb from "../component/HelpAirbnb";
import HelpLogin from "../component/HelpLogin";
import HelpGuide from "../component/HelpGuide";
import Helppublic1 from "../component/Helppublic1";
import Helppublic2 from "../component/Helppublic2";
import HelpCenter from "../component/HelpCenter";
import HostFooter from "../component/HostFooter";
import styled from "styled-components";

function HelpPage() {
  return (
    <div className="HelpPage">
      <HelpHeader />
      <HelpWith />
      <HelpAirbnb />
      <HelpLogin />
      <HelpGuide />
      <Helppublic1 />
      <Helppublic2 />
      <HelpCenter />
      <HostFooterStyled>
        <HostFooter />
      </HostFooterStyled>
    </div>
  );
}

const HostFooterStyled = styled.div`
  position: relative;
  top: -200px;
  margin-bottom: -100px;
`;

export default HelpPage;
