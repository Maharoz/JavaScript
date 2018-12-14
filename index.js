//speed Limit = 70
// 5 -> 1 point
// 12 points -> suspended
checkSpeed(90);

console.log(checkSpeed(200));

function checkSpeed(speed){
    if(speed < 70){
        return 'ok';
    }
    else if(speed>70 && speed<180)
    {
      let point = Math.floor((180 - speed) / 5);
      return point;
    }

    else if(speed >= 180)
    {
        return 'licence suspended';
    }

}
