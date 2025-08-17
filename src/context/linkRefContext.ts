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
