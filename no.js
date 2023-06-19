function gemsToDiamond(person1, person2, person3) {
    console.log(person1, person2, person3);
    // error massage
    // if((person1 === undefined || person2 === undefined || person3 === undefined) || (person1 !== "number" || person2 !== "number" || person3 !== "number")){
    //     return 'Something is wrong! Please give me three number type parameter.';
    // }

    if(typeof person1, person2, person3 != undefined || typeof person1, person2, person3 == "number"){
        // return 'Something is wrong! Please give me three number type parameter.';
        const greet = () => 'Something is wrong! Please give me three number type parameter.';
    }

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

const finalResult = gemsToDiamond(1, 'h', 1);
console.log(finalResult);