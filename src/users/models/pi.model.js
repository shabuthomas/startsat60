let radius = 50;
let squareSide = radius*2;

let GetRandomPoint = () => {
  min = 0;
  max = squareSide;
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
      while ( allPoints.length < totalPoints) {
        allPoints.push(GetRandomPoint());
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