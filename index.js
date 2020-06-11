const config = require('./src/common/config/env.config.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const UsersRouter = require('./src/users/routes.config');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,POST');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

app.use(bodyParser.json());
app.use(bodyParser.text());

UsersRouter.routesConfig(app);

app.listen(config.port, function () {
    console.log('Pi API listening @ port %s', config.port);
});
