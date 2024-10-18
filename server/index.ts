import express from "express";
import {join, resolve} from "path";
import Socket from "./service/socket";

const app = express();
const port = 3001;

app.use(express.json());

const clientPath = join(__dirname, "./client/");
app.use(express.static(clientPath));

app.get('/api/hello', (req, res) => {
  res.json({'hello': 'world!'});
});

app.get('*', (req, res) => {
  res.sendFile(resolve(clientPath, 'index.html'));
});

const server = app.listen(port, () => {
  console.log(`Server listening is http://localhost:${port}`);
});

new Socket(server);

module.exports = app;
