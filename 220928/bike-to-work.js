// flowchart conversion
// using https://docs.google.com/presentation/d/1iLjQdr_lwVt-aOetHOZe4d5Rwo1bPAR_8Qkdhxw81uU
//

// let isSnowOrIce = true; // do I need my winter bike?
// let isChildComing = false; // is Cedar coming?

const whichBike = (isSnowOrIce) => {
    if (!isSnowOrIce) {
        console.log('Get my summer bike.');
    } else {
        console.log('Get my winter bike.');
    }
}

const putOnHelmet = () => {
    console.log('Put on helmet.');
}

const daycare = (isChildComing) => {
    if (isChildComing) {
        console.log('Get Cedar sat and put on her helmet.');
        console.log('Bike to daycare.');
        console.log('Drop off Cedar at her classroom.');
    }
}

const bikeToWork = (isSnowOrIce, isChildComing) => {
    
    whichBike(isSnowOrIce);
    
    putOnHelmet();

    daycare(isChildComing);

    console.log('Bike to library.');
    console.log('Take off helmet and lock bike.');
}
console.log('----');
bikeToWork (true, true);
console.log('----');
bikeToWork (true, false);
console.log('----');
bikeToWork (false, true);
console.log('----');
bikeToWork (false, false);
console.log('----');

