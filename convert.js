// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

const shuvoHeight = inchToFeet(69);
// console.log(shuvoHeight);

// ignore this one
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaning = inch % 12;
    const result = feetNumber + ' feet ' + inchRemaning + ' inch';
    return result;
}

const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2);

function mileTokilometer(mile) {
    const kilometer = mile * 1.60934;
    return kilometer;
}

const distance = mileTokilometer(80);
// console.log(distance);

function kilometerToMile(kilometer) {
    const mile = kilometer * 0.621371;
    return mile;
}

const distance2 = kilometerToMile(100);
console.log(distance2);