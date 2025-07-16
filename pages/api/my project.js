import mongoose from "mongoose";

export default async function handler(req, res) {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    res.status(200).json({ message: "Connected to MongoDB successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Connection failed.", details: error.message });
  }
}
