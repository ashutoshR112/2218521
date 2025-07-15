const express = require("express");
const logger = require("./middleware/logger");
const urlRoutes = require("./routes/urlRoutes");

const app = express();
app.use(express.json());
app.use(logger);
app.use("/", urlRoutes);
app.get('/', (req, res) => {
  res.send('URL Shortener Microservice is running 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));