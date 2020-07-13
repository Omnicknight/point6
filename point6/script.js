

let topPC = {
    RAM: 32,
    GC: 'RTX 2080',
    CPU: 'i7 8700k',
    power: 1000,
}

let topPC2 = {};

function createCopy (newObj, obj) {

    for (let key in obj) {
        newObj[key] = obj[key];
    }
    return console.log(newObj);
}

createCopy (topPC2, topPC);



function strSum (obj) {

    let res = 0;

    for (let key in obj) {
        if (typeof obj[key] === 'string') res++; 
    }
    return res;
}

strSum(topPC);

