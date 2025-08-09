// Convert Temperature from celsius to Fahrenheit.
function CelToFahren(cel){
    let far = (cel * 1.8) +32;
    return far;
}

const celToFar = CelToFahren(20);
console.log('The Fahrenheit result is:', celToFar);



