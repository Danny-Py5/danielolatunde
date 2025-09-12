// import { useState } from "react";
import Header from "./components/Header.tsx";
import { Outlet } from "react-router-dom";
import linkRefContext from "./context/linkRefContext.ts";

function App() {
  // const LinkRefs = useContext(linkRefContext);
  return (
    <>
      <Header />
      <linkRefContext.Provider
        value={{
          home: "/home",
          project: "/projects",
          about: "/about",
          service: "/service",
          contact: "/contact",
          blog: "/blog",
        }}
      >
        <Outlet />
      </linkRefContext.Provider>
    </>
  );
}

export default App;
