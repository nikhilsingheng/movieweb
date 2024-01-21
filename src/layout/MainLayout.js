import React from "react";
import Header from "../comman/Header/Header";
import Footer from "../comman/Footer/Footer";
export default function MainLayout(props) {
  return (
    <>
      <div className="main">
        <div className="main__content">
          <Header />
          <div className="mb-auto">{props.children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
}