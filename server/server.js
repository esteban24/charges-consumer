const express = require('express');
var cors = require('cors')

const app = express();
const PORT = process.env.PORT = 5000;

app.use(express.static(process.env.STATIC_CONTENT));
app.use(cors());

app.get('/ping', function (req, res) {
	res.status(200).json({ response: 'pong' })
});

app.listen(PORT, () => {
  console.log('Server is running at:',PORT);
});