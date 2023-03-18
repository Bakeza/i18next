import { Col, Row, Select, Space } from "antd";
import { Option } from "antd/es/mentions";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../context/languageContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);

  const { t, i18n } = useTranslation("navbar");

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  const navbarStyle = {
    backgroundColor: "#333",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px"
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold"
  };

  const linksStyle = {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px"
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Logo</div>
      <ul style={linksStyle}>
        <li>
          <Link to="/" style={linkStyle}>
            {t("home")}
          </Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>
            {t("about")}
          </Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle}>
            {t("contact")}
          </Link>
        </li>

        <li>
          <Select
            style={{
              width: "100px",
              color: "white"
            }}
            defaultValue={language}
            onChange={(value) => {
              console.log(value);
              changeLanguage(value);
              setLanguage(value);
            }}
            bordered={false}
            optionLabelProp="label"
          >
            <Option value={"ar"} label={"ar"} style={{ width: "100%" }}>
              <Row justify={"space-between"}>
                <Col>
                  <Space>{t("languages.ar")}</Space>
                </Col>
              </Row>
            </Option>
            <Option value={"en"} label={"en"} style={{ width: "100%" }}>
              <Row justify={"space-between"}>
                <Col>
                  <Space>{t("languages.en")}</Space>
                </Col>
              </Row>
            </Option>
          </Select>
        </li>
      </ul>
    </nav>
  );
}
