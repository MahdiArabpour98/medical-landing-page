"use client";

import ReactFullpage from "@fullpage/react-fullpage";

import HeroPage from "@/components/pages/hero";
import ServicesPage from "@/components/pages/services";
import CustomersPage from "@/components/pages/customers";

export default function Home() {
  return (
    <ReactFullpage
      navigation
      navigationPosition="left"
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <HeroPage />
            </div>
            <div className="section">
              <ServicesPage />
            </div>
            <div className="section">
              <CustomersPage />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
