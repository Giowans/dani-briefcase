import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const PageLayout = (props) => {
  const { children } = props;

  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <div className="w-full h-screen row-span-2 row-span-4 lg:w-screen">
      {/**Navbar */}
      <Navbar showNavbar={showNavbar}/>
      <div className = 'w-full h-full px-12 lg:px-32 lg:w-screen py-14'>{children}</div>
    </div>
  );
};

export default PageLayout;
