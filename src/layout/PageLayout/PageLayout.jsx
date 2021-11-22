import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const PageLayout = (props) => {
  const { children } = props;

  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <div>
      {/**Navbar */}
      <Navbar showNavbar={showNavbar}/>
      <div className = 'w-screen h-screen px-32 py-14'>{children}</div>
    </div>
  );
};

export default PageLayout;
