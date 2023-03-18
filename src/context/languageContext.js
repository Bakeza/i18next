import { createContext } from "react";

export const LanguageContext = createContext({
  language: localStorage.getItem("language") || "En",
  setLanguage: null
});
