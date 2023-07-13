const express = require('express');

require('dotenv').config()
require('./config/mongoose.config')

const app = express();
const port = process.env.PORT;

// allow app to accept json
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// user model and routes moved to different files
const routeAttacher = require('./routes/joke.routes')
routeAttacher(app)

app.listen( port, () => console.log(`>>Server online! Listening to ${port}`) );
