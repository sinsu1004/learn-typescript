// function logMessage(value: any) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);


var seho2: string | number | boolean;
function logMessage(value: string | number){
    if (typeof value === 'number'){
        value.toLocaleString();
    }
    if (typeof value === 'string'){
        value.toString();
    }

    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// function askSomeone(someone: Developer | Person){
//     // someone.name
//     // someone.skill
//     // someone.age
// }

// askSomeone({name: 'elqpffhvj', skill: 'dd'})
// askSomeone({name: 'elqpffhvj', age: 1})

function askSomeone(someone: Developer & Person){
    someone.name
    someone.skill
    someone.age
}

askSomeone({name: 'elqpffhvj', skill: 'dd',age:1})
askSomeone({name: 'elqpffhvj', age: 1,skill:'1'})

// var seho: string | number | boolean;
// var capt: string & number & boolean;