let voxel = {x: 3.6, y: 7.4, z: 6.54};

let x = voxel.x; // x = 3.6
let y = voxel.y; // x = 7.4
let z = voxel.z; // x = 6.54

const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATUES = {
    today: 77.5,
    tommorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const { tommorrow : tempOfTomorrow } = avgTemperatures; // change this line
    // change code above this line
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATUES)); // should be 79