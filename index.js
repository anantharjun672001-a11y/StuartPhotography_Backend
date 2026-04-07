import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import clientRoutes from './Routes/clientRoutes.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://stuart-photography.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);
app.use(express.json());

app.use('/api/clients', clientRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected "))
  .catch(err => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT} `);
});

app.get("/", (req, res) => {
  res.send("Backend is running  ");
});