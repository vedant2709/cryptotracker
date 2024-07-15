import React, { useEffect, useState } from "react";
import "./styles.css";
import TemporaryDrawer from "./Drawer";
import Button from "../Button";

function Header() {
  return (
    <div className="header">
      <h1 className="logo">
        Cryptotracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/">
          <p className="link">Compare</p>
        </a>
        <a href="/">
          <p className="link">Watchlist</p>
        </a>
        <a href="#">
          <Button text={'Dashboard'} outlined={false} onClick={()=>console.log("btn clicked")}/>
        </a>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer/>
      </div>
    </div>
  );
}

export default Header;
