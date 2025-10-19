const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5123;

app.use(express.json());

// instruction: setup cors
app.use(cors());

// instruction: setup MongoDB Connection
async function connectToMongoDB() {
  try {
    // wait for the MangoDB to connect
    await mongoose.connect("mongodb://localhost:27017/mockpa");
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
}
connectToMongoDB();

// instruction: setup routes
app.use("/courses", require("./routes/courses"));
app.use("/instructors", require("./routes/instructors"));

app.get("/", (req, res) => {
  res.send("Good luck!");
});

// Server listening
app.listen(port, () => console.log(`Server started on port ${port}`));
