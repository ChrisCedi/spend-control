import React from "react";
import "./Home.css";
import { BalanceBox } from "../../components/BalanceBox/BalanceBox";

export const Home = () => {
  return (
    <div id="container">
      <div className="body-home">
        <BalanceBox />
      </div>
    </div>
  );
};
