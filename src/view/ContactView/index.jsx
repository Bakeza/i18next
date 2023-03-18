import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../context/languageContext";

export default function Contact() {
  const { t } = useTranslation("contact");
  const { language } = useContext(LanguageContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul
          style={{
            listStyle: "none",
            padding: "10px",
            textAlign: language === "ar" ? "right" : "left"
          }}
        >
          <li>
            <strong>{t("email")}:</strong> info@mywebsite.com
          </li>
          <li>
            <strong>{t("phone")}:</strong> 555-1234
          </li>
          <li>
            <strong>{t("address")}:</strong> 123 Main St, Anytown USA
          </li>
        </ul>
      </div>
    </div>
  );
}
