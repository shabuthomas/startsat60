var assert = require('assert');
const RobotModel = require('../src/users/models/robot.model');

describe('Process Commands', function() {

  describe('CreateModel', function() {

    it('Model should be not active ', function() {
        RobotModel.Report()
        .then((result) => {
            assert.equal( result, "not active");
        });
    });

    it('Model should be active ', function() {
        RobotModel.Place( 3, 4, "EAST");
        RobotModel.Report()
        .then((result) => {
            assert.notEqual( result, "not active");
        });
    });

  });

  describe('Model Functions', function() {

    it('Model should active ', function() {
        RobotModel.Place( 3, 4, "EAST");
        RobotModel.Report()
        .then((result) => {
            assert.equal( result, "3,4,EAST");
        });
    });
  });


});
