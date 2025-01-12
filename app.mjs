import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Worlds!");
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export { app, server };
