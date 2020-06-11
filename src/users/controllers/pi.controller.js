const piModel = require('../models/pi.model');

exports.Process = (req, res) => {
    let totalPoints = req.query.points;
    console.log('total No: of Points  -> ', totalPoints);
    piModel.GetPi(totalPoints)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((result) => {
            res.status(200).send(result);
        });
};

exports.ProcessPost = (req, res) => {
    let NoOfPoints = req.body.points;
    console.log('No of points -> ', NoOfPoints);
    piModel.GetPi(NoOfPoints)
        .then((result) => {
            res.status(201).send({status: result.status});
        })
        .catch((result) => {
            res.status(200).send(result);
        });
};