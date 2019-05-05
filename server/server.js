const express = require('express');
var cors = require('cors')

const app = express();
const PORT = process.env.PORT = 80;

app.use(express.static(process.env.STATIC_CONTENT));
app.use(cors());

app.listen(PORT, () => {
  console.log('Server is running at:',PORT);
});