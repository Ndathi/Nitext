const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "Private-Key": "d5e4d3b2-b7dd-4f9d-9729-9dc704b055f1" } }
      );
      return res.status(r.status).json(r.data);
} catch (e) {
    return res.status(e.response.status).json(e.response.data);
    // console.log(e)
}
});

app.listen(3001);