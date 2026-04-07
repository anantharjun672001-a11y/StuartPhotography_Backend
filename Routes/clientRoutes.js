import express from "express";
import Client from "../models/Client.js";

const router = express.Router();

// GET ALL
router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

// ADD
router.post("/", async (req, res) => {
  const newClient = new Client(req.body);
  await newClient.save();
  res.json(newClient);
});

// GET ONE
router.get("/:id", async (req, res) => {
  const client = await Client.findById(req.params.id);
  res.json(client);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;