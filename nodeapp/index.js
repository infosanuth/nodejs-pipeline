import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ response: "Hello, " });
});

app.get("/status", (req, res) => {
  res.json({ status: "Application is running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(5000, () => {
        console.log("Server is running on port 5000");
    });
}

export default app;
