// const random = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; 
//   }


//   const generateNumbers = (amount, from, to) => {
//       let str = '';
//       for (let i = 0; i < amount; i++) {
//         str += (!str ? '' : ',' + random(from, to));
//       }
//      return str;
//   };

//   const listOfNumbers = generateNumbers(10, 50, 100);

//   console.log(listOfNumbers);


// const pc = {
//     ram: 32,
//     price: 30,
//     proc: 'i7 8700k',
//     area: 'home',
// };

// console.log(pc);

// let globalId = 1;

// const createMonster = (id, nick, style, hp) => {
//     return {
//         id: globalId++,
//         userId: id,
//         nick: nick,
//         style: style,
//         hp: hp,
//     };
// };

// console.log(createMonster ());
// console.log(createMonster ());


// const sniper = createMonster('1', 'elit', 'sniper', '50');
// const tank = createMonster('2', 'elit', 'tank', '150');

// const key = prompt

// for (const key in sniper) {
//     if (sniper.hasOwnProperty(key)) {
//         const value = sniper[key];
//         console.log(value, key);
//     }
// }

// const sniperV2 = sniper;

// sniperV2.ability = 'headshot';

// delete sniperV2.hp;

// console.log(sniper, sniperV2);

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

