import React from "react";
import { Helmet } from "react-helmet";
import Routes from "./routes";
import Sidebar from "../components/sidebar"

const App = () => {
  return (
    <>
      <Helmet>
        {/* google font link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
        <title>Oktio - Super Buyer & Supplier</title>
      </Helmet>
      <div className="body_content">
        <div className="siderbar_content">
            <Sidebar/>
        </div>
        <div className="main_content">
          <Routes />
        </div>
      </div>
    </>
  );
};

export default App;
