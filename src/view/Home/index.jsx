import { Button, Card, Col, Row, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../context/languageContext";

export default function Home() {
  const { t } = useTranslation("home");
  const { language } = useContext(LanguageContext);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  };

  const headerStyle = {
    backgroundColor: "#555",
    color: "#fff",
    padding: "20px",
    textAlign: "center"
  };

  const contentStyle = {
    flex: 0.5,
    padding: "20px"
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>{t("title")}</h1>
      </div>
      <div style={contentStyle}>
        <p>{t("description")}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: language === "ar" ? "right" : "left"
        }}
      >
        {Array(4)
          .fill(0)
          .map(() => (
            <Card
              hoverable
              style={{
                width: 240
              }}
              cover={
                <img
                  alt="example"
                  src="https://en.nn.najah.edu/media/uploads/weblog/2020/06/15/1_ElIAS0m.jpg"
                />
              }
            >
              <Meta
                title={t("cardTile")}
                description={
                  <Row>
                    <Col span={24}>
                      <Typography.Text>{t("cardDescription")}</Typography.Text>
                    </Col>
                    <Col span={24}>
                      <Button>{t("cardButton")}</Button>
                    </Col>
                  </Row>
                }
              />
            </Card>
          ))}
      </div>
    </div>
  );
}
