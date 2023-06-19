// Problem One- Create a function with numeric type value and the value is multifly by 3 , then addition by 10 then division by 2 then subtraction by 5.

function mindGame(number) {
    // error massage
    if (typeof number != "number") {
        return 'Something is wrong! Please give me a number type parameter.';
    }

    // function code
    const numberMultifly = number * 3;
    const aboveResultSum = numberMultifly + 10;
    const aboveResultDivision = aboveResultSum / 2;
    const totalResult = aboveResultDivision - 5;
    return totalResult;
}



// Problem Two- Create a function with string and check the string value length is even or odd then return value with some conditions.

function evenOdd(stringValue) {
    // error massage
    if (typeof stringValue != "string") {
        return 'Something is wrong! Please give me a string type parameter.';
    }

    // function code
    let stringCharacter = stringValue.length;
    if (stringCharacter % 2 == 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}



// Problem Three- Create a function get number type value via parameter then subtraction by seven and finally return a result with some conditions.

function isLGSeven(number) {
    // error massage
    if (typeof number != "number") {
        return 'Something is wrong! Please give me a number type parameter.';
    }

    // function code
    let subNumber = number - 7;
    if (subNumber < 7) {
        return subNumber;
    }
    else {
        return number * 2;
    }
}



// Problem Four- Create a function get an friend-aged array through parameter and check whether it has negative value via foor loop and print the total number or length of negative value.

function findingBadData(friendAge) {
    // error massage
    if (Array.isArray(friendAge) == false) {
        return 'Something is wrong! Please give me an aged-type array parameter.';
    }

    // function code
    let negAges = [];
    for (let i = 0; i < friendAge.length; i++) {
        const personAge = friendAge[i];
        if (personAge < 0) {
            negAges.push(personAge);
        }
    }
    const negAgesLength = negAges.length;
    return negAgesLength;
}



// Problem Five- Create a function with three parameters which are the person's gem and multifly by the recommended value then add the three values. finally it print with some conditions.

function gemsToDiamond(person1, person2, person3) {
    // error massage
    if((typeof person1 === undefined || typeof person2 === undefined || typeof person3 === undefined) || (typeof person1 !== "number" || typeof person2 !== "number" || typeof person3 !== "number")){
        return 'Something is wrong! Please give me three number type parameter.';
    }

    // function code
    const person1Multifly = person1 * 21;
    const person2Multifly = person2 * 32;
    const person3Multifly = person3 * 43;

    const sumOfAll = person1Multifly + person2Multifly + person3Multifly;
    if (sumOfAll >= 2000) {
        return sumOfAll - 2000;
    }
    else {
        return sumOfAll;
    }
}
