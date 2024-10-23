//Leap Year Checker

function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(true, `It is a leap year`); 
    } else {
        console.log(false, `It is not a leap year`); 
    }
}

// leapYear(2016); 
// leapYear(2020);
// leapYear(1900);
// leapYear(2000);
// leapYear(2023);


//Ticket Pricing: 
function movieticket() {
    let checkage = prompt("how old are you");
    if (checkage <= 12) {
        console.log(`$10`);
    } else if (checkage >= 13 && checkage <= 17) {
        console.log(`$15`);
    } else if (checkage >= 18) {
        console.log(`$20`);
    }


    return checkage;
}

//  movieticket()
//  movieticket()
//  movieticket()


//Weather Clothing Adviser

function weatherclothing() {
    let temperature = prompt("What is the temperature outside?");
    let raining = prompt("Is it raining? (yes/no)");
    switch (true) { 
        case (temperature < 50 && raining === "yes"):
            console.log(`Wear shorts and t-shirt.`);
            break;
        case (temperature < 50 && raining === "no"):
            console.log(`Wear shorts and t-shirt.`);
            break;
        case (temperature >= 50 && raining === "yes"):
            console.log(`Wear long pants and sweater.`);
            break;
        case (temperature >= 50 && raining === "no"):
            console.log(`Wear short pants and sweater.`);
            break;
        default:
            console.log(`Wear long pants only.`);
    }
}

//  weatherclothing();



//  Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

  console.log(fibonacci(10));

