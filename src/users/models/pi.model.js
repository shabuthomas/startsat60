let radius = 50;
let squareSide = radius*2;

let GetRandomPoint = (min, max) => {
  val1 = Math.floor(Math.random() * (max - min) + min);
  val2 = Math.floor(Math.random() * (max - min) + min);
  return {x : val1, y: val2};
};

let isPointIncircle = (pt) => {
  distance = Math.sqrt( (pt.x - radius)**2 + (pt.y - radius)**2)
  // console.log('distance XX -> ', pt, distance);
  return distance <= radius;
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
        if ( isPointIncircle(pt))
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