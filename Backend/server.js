const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5001;
const DB_FILE_PATH = path.join(__dirname, 'db.json');

app.use(cors());
const readViewCount = () => {
  try {
    if (fs.existsSync(DB_FILE_PATH)) {
      const data = fs.readFileSync(DB_FILE_PATH);
      return JSON.parse(data).viewCount;
    }
    return 0; 
  } catch (error) {
    return 0;
  }
};

const writeViewCount = (count) => {
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({ viewCount: count }));
};

app.get('/api/views', (req, res) => {
  const count = readViewCount();
  res.json({ count: count });
});

app.post('/api/views', (req, res) => {
  let count = readViewCount();
  count++;
  writeViewCount(count);
  res.json({ count: count });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});