import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ response: "Hello, Sanuth Venuka" });
});

app.get("/status", (req, res) => {
  res.json({ status: "Application is running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

export default app;
