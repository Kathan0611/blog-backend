import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/blog.js';
const app = express();
const PORT = 9000;

connectDB();
 app.use(cors());
 
 app.use(express.json());
 app.use(express.static("public/upload"));
  
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/v1",authRoutes);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});