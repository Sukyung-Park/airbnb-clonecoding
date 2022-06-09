import "../App.css";
import React from "react";
import CardBox from "../component/CardBox";
import ContactHead from "../component/ContactHead";
import HostFooter from "../component/HostFooter";
import Bottom from "../component/ContactBottom";

function ContactPage() {
  return (
    <div className="ContactPage">
      <ContactHead />
      <CardBox />
      <Bottom />
      <HostFooter />
    </div>
  );
}

export default ContactPage;
