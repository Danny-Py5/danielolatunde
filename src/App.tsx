// import { useState } from "react";
import React from "react";
import Header from "./components/Header.tsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
