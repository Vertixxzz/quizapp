require("dotenv").config();

const express = require("express");
const { connectDB } = require("./app/config/db.config");

const authRoutes = require("./app/routes/auth.routes");
const userRoutes = require("./app/routes/user.routes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8080;

connectDB(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => {
        console.error("Failed to start server:", err.message);
        process.exit(1);
    });
