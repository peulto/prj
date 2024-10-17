import express from "express";
import {join, resolve} from "path";

const app = express();
const port = 3001;

app.use(express.json());

const clientPath = join(__dirname, "../client/dist");
app.use(express.static(clientPath));

app.get('*', (req, res) => {
  res.sendFile(resolve(clientPath, 'index.html'));
});

app.get('/api/hello', (req, res) => {
  res.json({'hello': 'world!'});
});

app.listen(port, () => {
  console.log(`Server listening is http://localhost:${port}`);
});

module.exports = app;
