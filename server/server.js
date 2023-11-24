import express from "express";
import { resolve } from "path";

const PORT = 3000;

const app = express();

const ROOT = resolve(__dirname, "../dist");

app.use(express.static(ROOT));

app.listen(PORT, () => {
  console.log(`express server on port 3000`);
});
