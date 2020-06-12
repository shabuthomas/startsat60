let radius = 50;
let squareSide = radius*2;

let GetRandomPoint = (min, max) => {
  val1 = Math.floor(Math.random() * (max - min) + min);
  val2 = Math.floor(Math.random() * (max - min) + min);
  return {x : val1, y: val2};
};

let isPointIncircle = (pt, circleradius) => {
  distance = Math.sqrt( (pt.x - circleradius)**2 + (pt.y - circleradius)**2)
  // console.log('distance XX -> ', pt, distance);
  return distance <= circleradius;
};

let CalculatePi = (totalPoints) => {
    return new Promise((resolve, reject) => {
      allPoints = [];
      min = 0;
      max = squareSide;    
      while ( allPoints.length < totalPoints) {
        allPoints.push(GetRandomPoint(min, max));
      }

      pointsInCircle = 0;
      allPoints.forEach(function(pt) {
        if ( isPointIncircle(pt, radius))
        {
          pointsInCircle++;
        }          
      });      

      pointsRatio = pointsInCircle/totalPoints;
      approxPi = pointsRatio * 4;
      console.log('approxPi Value is -> ', approxPi);
      resolve({pi : approxPi});
    });
};

exports.GetPi = CalculatePi;