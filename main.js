//////////////////////////////////////////////////////////// Завдання 8 ////////////////////////////////////////////////////////////

// const week = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];

// let x;

// do
// {
//     for (let i = 0; i < week.length; i++)
//     {
//         console.log(week[i]);

//         x = confirm("OK / CANCEL");

//         if (x)
//         {
//             continue;
//         }
//         else
//         {
//             break;
//         }
//     }

//     console.log("\n");

// } while (x);

//////////////////////////////////////////////////////////// Завдання 9 ////////////////////////////////////////////////////////////

// for (let i = 2; i <= 9; i++)
// {
//     for (let y = 1; y <= 10; y++)
//     {
//         let res = i * y;
//         console.log(`${i} * ${y} = ${res}`);
//     }

//     console.log("\n");
// }

//////////////////////////////////////////////////////////// Завдання 10 ////////////////////////////////////////////////////////////

// function getRandomIntInclusive(min, max)
// {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function audit(randomNumber, userOption)
// {
//     if (randomNumber < userOption)
//     {
//         return console.log(`Random number < ${userOption}`);
//     }
//     else if (userOption < randomNumber)
//     {
//         return console.log(`Random number > ${userOption}`);
//     }
//     else
//     {
//         return console.log(`Random number = ${userOption}`);
//     }
// }

// let min = 1;
// let max = 100;

// let randomNumber = getRandomIntInclusive(min, max);

// for (;;)
// {
//     let userOption = prompt("Enter number -> ");

//     console.log(audit(randomNumber, userOption));

//     if (randomNumber != userOption)
//     {
//         continue;
//     }
//     else
//     {
//         break;
//     }
// }