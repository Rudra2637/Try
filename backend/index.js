import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import doctorRoutes from "./routes/search.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Doctor Search API Running...");
});

// Use routes
app.use("/api/doctors", doctorRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});