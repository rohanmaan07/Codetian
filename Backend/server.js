require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch(err => console.error("MongoDB connection error:", err));

const counterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  count: { type: Number, default: 107 }// 107 isiliye kiya kyuki purane record mei itne views aa chuke the 
});

const Counter = mongoose.model('Counter', counterSchema);

app.get('/api/views', async (req, res) => {
  try {
    const viewCounter = await Counter.findOne({ name: 'siteViews' });
    res.json({ count: viewCounter ? viewCounter.count : 0 });
  } catch (error) {
    res.status(500).json({ message: "Error fetching views" });
  }
});

app.post('/api/views', async (req, res) => {
  try {
    const updatedCounter = await Counter.findOneAndUpdate(
      { name: 'siteViews' },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );
    res.json({ count: updatedCounter.count });
  } catch (error) {
    res.status(500).json({ message: "Error incrementing views" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
