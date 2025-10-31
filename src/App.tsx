import { useState } from "react";
import Header from "./components/Header.tsx";
import { Outlet } from "react-router-dom";
import linkRefContext from "./context/linkRefContext.ts";
import { CurrentPageContext } from "./context/linkRefContext.ts";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
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
      </CurrentPageContext.Provider>
    </>
  );
}

export default App;
