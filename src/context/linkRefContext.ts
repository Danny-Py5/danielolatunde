import { createContext } from "react";

export type linkRef = {
  home: string;
  project: string;
  about: string;
  service: string;
  contact: string;
  blog: string;
};
const linkRefContext = createContext<linkRef>({
  home: "",
  project: "",
  about: "",
  service: "",
  contact: "",
  blog: "",
});
export default linkRefContext;

// Context for managing current page
export type CurrentPageContextType = {
  currentPage: string;
  setCurrentPage: (page: string) => void;
};

export const CurrentPageContext = createContext<CurrentPageContextType>({
  currentPage: "",
  setCurrentPage: () => {},
});