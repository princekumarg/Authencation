const express = require("express");
const auth = require("./routes/authRoutes");
const PORT = 3030;
const app = express();

// Middlewares
app.use(express.json()); //* used for parsing json data
app.use(express.static("public")); //* used to serve html files from public folder

// Routes
app.use("/api/v1", auth);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});