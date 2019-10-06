// ------------- libs and modules ----------------------
// 
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

// ------------------ App Initialize ----------------
const app = express();
app.use(cors());

//------------------ middleware -------------------
// Body Parser = for form, to get data from
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// ------------------- Routes ------------------
// landing route
app.get('/', (req, res) => res.send('index from landing page'));
// ci-routes
require('./routes/ci')(app);

// ---------------- Listen and exec -------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));