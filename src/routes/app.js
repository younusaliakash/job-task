import React from "react";
import { Helmet } from "react-helmet";
import Routes from "./routes";

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
      <Routes/>
    </>
  );
};

export default App;
