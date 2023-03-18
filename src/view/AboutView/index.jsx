import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("about");

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px"
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "40px"
  };

  const contentStyle = {
    lineHeight: "1.5",
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>{t("title")}</h1>
      <div style={contentStyle}>
        <p>{t("description")}</p>
      </div>
    </div>
  );
}
