const KeyModel = require('../authorization/models/key.model');    

exports.validAPIKeyNeeded = (req, res, next) => {
    // console.log('authorization header -> ', req.headers['authorization']);
    if (req.headers['authorization']) {
        try {
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send();
            } else {
                KeyModel.findByKey(authorization[1])
                .then((data) => {
                    console.log('key data ->     ', data);
                    req.keyObj = data;
                    return next();
                })
                .catch((result) => {
                    return res.status(401).send();
                });
            }
        } catch (err) {
            return res.status(403).send();
        }
    } else {
        return res.status(401).send();
    }
};