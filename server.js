const express = require("express");
const mailRouter = require("./routes/mailRouter");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/v1/", mailRouter);
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not Found",
  });
});
app.listen(PORT, () => {
  console.log(`Server is listening in the Port:- ${PORT}`);
});
