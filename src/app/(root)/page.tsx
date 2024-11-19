// import React, { useEffect } from "react";
import HeaderBox from "@/components/ui/headerBox";

const Home = () => {

  return (
    <div>
      <header className="header-box">
        <HeaderBox
          title="Online and Mobile Security"
          subtext="We take protecting your finances seriously. All day, every day."
          backgroundImage="/icons/sec_home.png" // Correct relative path to the public folder
        />
      </header>
    </div>
  );
};

export default Home;
