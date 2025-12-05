import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const DB_PATH = './db.json';


function readDB() {
  const data = fs.readFileSync(DB_PATH);
  return JSON.parse(data);
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  const db = readDB();
  
  if (db.users.find(user => user.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  db.users.push({ name, email, password });
  writeDB(db);
  res.json({ message: 'User created' });
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const db = readDB();
  const user = db.users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful', user: { name: user.name, email: user.email } });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
