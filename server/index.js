const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const helmet = require('helmet');
const routes = require('./api');
const app = express();
const os = require('os');
const cpuCount = os.cpus().length;
process.env.UV_THREADPOOL_SIZE = cpuCount * 4;

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// bodyParser for req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// helmet for security
// app.use(helmet());
app.use(helmet({ contentSecurityPolicy: false }));

app.use('/api', routes);

export default app
