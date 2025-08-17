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
          home: "from provider",
          project: "from provider",
          about: "from provider",
          service: "from provider",
          contact: "from",
          blog: "",
        }}
      >
        <Outlet />
      </linkRefContext.Provider>
    </>
  );
}

export default App;
