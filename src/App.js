import TestingRouter from "./router";
import { I18nextProvider } from "react-i18next";

import i18n from "./i18n";
import { useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { LanguageContext } from "./context/languageContext";

function App() {
  
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    document.body.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <ConfigProvider direction={language}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <I18nextProvider i18n={i18n}>
          <TestingRouter />
        </I18nextProvider>
      </LanguageContext.Provider>
    </ConfigProvider>
  );
}

export default App;
