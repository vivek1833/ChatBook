import express from 'express';

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'ChatBook API Working ' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
