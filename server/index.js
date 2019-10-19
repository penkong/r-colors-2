// ------------- libs and modules ----------------------
// 
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// ------------------ reuse files -----------------------
const keys = require('./config/keys')

// ------------------- register DB ---------------------
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true , useUnifiedTopology: true })
  .then(() => console.log('mongo connected!'))
  .catch(err => console.log(err));

// ------------------ App Initialize --------------------
const app = express();

//------------------ middleware -------------------------
app.use(cors());
// Body Parser = for form, to get data from
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// ------------------- Routes ---------------------------

// sign / login -routes
require('./routes/api/auth')(app);

// ------------------- Routes prod -----------------------
//route for let react-router make decision
if (process.env.NODE_ENV === 'production') {
  //express serve production assets like main .js
  //go there for anything requested
  app.use(express.static('client/build'));
  //express will server index.html if does not recognize route
  const path = require('path');
  //catch all case
  app.get('*', (req, res) => {
    //if i don't understand react-router will handle it
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// ---------------- Listen and exec ----------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));



