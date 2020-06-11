const piController = require('./controllers/pi.controller');

exports.routesConfig = function (app) {
    app.get('/', function (req, res) {
        res.send('<p>Please enter number of points to generate randomly in a 100x100 square </p><form action="/pi"><input name="points" vlaue="10"/><Br><input type="Submit"></form>');
      });
    app.get('/pi', [
        piController.Process
    ]);
    app.post('/pi', [
        piController.ProcessPost
    ]);    
};