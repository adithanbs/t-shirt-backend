require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');

const authRoutes = require('./routes/auth')



// DB CONNECTION
mongoose.connect(process.env.DATABASE
// ,{
// useNewUrlParser:true,
// useUnifiedTopology:true,
// useCreateIndex:true
// }
).then(() => console.log('DB CONNECTED..!'))
.catch(() =>{
    console.log('DB NOT CONNECTED..xxx..oops');
});

// MIDDLEWARES
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// MY Routes
app.use('/api',authRoutes);
// PORT
const port = 8000;
// STARTING SERVER
app.listen(port,() => {
    console.log(`Server up on running port ${port}`)
})