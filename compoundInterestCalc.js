window.setTimeout(function () {
    // put all of your JS code from the lecture here
    var capital = prompt("Start Capital?");
    var interestRate = prompt("Interest Rate in % ?") / 100;
    var years = prompt("Amount of years to be displayed?");

    var counter = 1;
    while (counter <= years) {
        capital = capital * (interestRate + 1);
        console.log("Balance after " + counter + " year(s): " + capital.toFixed(2));
        counter++;
    }
    alert("Open Console Please (F12)")
}, 500);