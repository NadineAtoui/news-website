require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors"); 
const NodeCache = require("node-cache");

const app = express();
const PORT = process.env.PORT || 3000;

const cache = new NodeCache({ stdTTL: 600 });

app.use(cors({
  origin: 'http://localhost:3001', // Client host
}));

app.use(express.json());

app.get("/api/headlines", async (req, res) => {
  const apiKey = process.env.API_KEY; 
  const { category = "general" } = req.query;
  
  const cacheKey = `headlines_${category}`;
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    console.log("Serving from cache");
    return res.json(cachedData);
  }

  const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

  try {
    const response = await axios.get(newsUrl);
    const data = response.data;
    cache.set(cacheKey, data);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
