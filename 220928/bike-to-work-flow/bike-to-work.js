// flowchart conversion
// using https://docs.google.com/presentation/d/1iLjQdr_lwVt-aOetHOZe4d5Rwo1bPAR_8Qkdhxw81uU
//

// let isSnowOrIce = true; // do I need my winter bike?
// let isChildComing = false; // is Cedar coming?

const { daycare } = require('./daycare.js');

const { putOnHelmet } = require('./putOnHelmet.js');
const { whichBike } = require("./whichBike");

const encounterDog = () => {
    const dogNames = [ 'Jessica', 'Janet', 'Jordan', 'Jasmine' ];

    const randomIndex = Math.floor(Math.random() * dogNames.length);

    const dog = dogNames[randomIndex];
    console.log(`Avoid an aggresive barking dog named ${dog}.`);


}

const bikeToWork = (isSnowOrIce, isChildComing) => {
    
    whichBike(isSnowOrIce);
    
    putOnHelmet();

    daycare(isChildComing);

    encounterDog();

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

