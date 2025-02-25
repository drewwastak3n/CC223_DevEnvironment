const express = require("express");
const cors = require("cors"); 

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.static("../frontend")); 

app.get("/data", (req, res) => {
    res.json({ message: "Backend Working..." });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
