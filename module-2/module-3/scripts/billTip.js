var billBeforeTip = 40.00; // Bill before tip

var tip = 12.5;

var tipAmount =  (tip * billBeforeTip) / 100;
//BODMAS brackets Division multiplication addition subtraction
var receipt = 'The bill plus tip is ' + (billBeforeTip + tipAmount); // concatenating

console.log( receipt );
