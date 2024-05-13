// განვილილი მასალის დავალებები

// 1. შევქმნათ ყველა მარტივი ტიპის ცვლადი რაც ვისწავლეთ;

var person1 = "nika";
let person2 = "nika";
const person3 = "nika";

// 2. არითმეტიკული ოპერაციები მიმატება, გამოკლება, გაყოფა, გამრავლება ყველაფერი რაც ვისწავლეთ;

let x = 3;
let y = 5;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

// 3. სტრინგების კონკატენაცია + ით და სტრინგების კონკატენაცია `ბექტიკებით`;

let lastName = "donadze";
let  myAge = 20;

console.log("i'm " + person2 + " " + lastName + " and i'm " + myAge + " year old.")
console.log(`I'm ${person2} ${lastName} and i'm ${myAge} year old.`)

// 4. მოცემულა მართკუთხედი სიგრძე ცვლადი = 7 და სიგანე = 5 (შექმენით 2 ცვლადი) გამოთვალეთ მართკუთხედის ფართობი ამ 2 ცვლადის გამოყენებით;

let l = 7;
let w = 5;

let rectangleArea = l*w;
console.log(rectangleArea);

// 1.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი, console.log გამოიტანეთ ამ მასივის ყველა ელემენტის ჯამი;

const numberArray = [10, 20, 30, 40, 50];
 console.log(numberArray[0]+numberArray[1]+numberArray[2]+numberArray[3]+numberArray[4]);

let numberArraySum = numberArray[0]+numberArray[1]+numberArray[2]+numberArray[3]+numberArray[4];
console.log(numberArraySum);

// 2.შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი რომელსაც აქვს შემდეგი ველები (properties): name, age, address.;

const peopleArray = [
    {
        name:"nika",
        age: 20,
        address: "Tbilisi",
    },
    {
        name:"tazo",
        age: 19,
        address: "Tbilisi",
    },
    {
        name:"dato",
        age: 21,
        address: "Tbilisi",
    },
];

// 3. console.log ში გამოიტანეთ 3 სტრინგი "My name is (#2 დავალების 0 ინდექსზე მყოფი ობიექტის ველი name ის მნიშვნელობა)", My age is (#2 დავალების 0 ინდექსზე მყოფი   ობიექტის ველი age ის მნიშვნელობა)", "My address is (#2 დავალების 0 ინდექსზე მყოფი  ობიექტის ველი address ის მნიშვნელობა)";

console.log(`My name is ${peopleArray[0].name}.`);
console.log(`My age is ${peopleArray[0].age}.`);
console.log(`My address is ${peopleArray[0].address}.`);

// 4. დაწერეთ if / else statement სადაც შეამოწმებთ #2 დავალებაში  1 ინდექსზე მყოფი ობიექტში არსებულ age ველის მნიშვნელობას თუ ნაკლებია 19 ზე console.log ში დაბეჭდეთ "I am a teenager" დანარჩენ შემთხვევაში დაბეჭდეთ "I am an adult";

if (peopleArray[1].age<19) {
    console.log("i'm a teenager.")
} else {
    console.log("i'm an adult.")
};

// 5.  შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი,და შეეცადეთ console.log-ში გამოიტანოთ ამ მასივის ყველა ელემენტი;

for (let index = 0; index < numberArray.length; index++) {
    console.log(numberArray[index])
};

// 6. const currentDay = new Date().getDay(); currentDay ცვლადი გვაძლევს კვირის დღეს რიცხვითი სახით ,0 არის კვირა ,1 არის ორშაბათი და ასე შემდეგ, 0-6 მდე რიცხვს აბრუნებს სადაც 6 არის შაბათი;
 let currentDay = new Date().getDay();

 switch (currentDay) {
    case 0:
        currentDay = "sunday"
        break;
    case 1:
        currentDay = "Monday"
        break;
    case 2:
         currentDay = "Tuesday"
        break;
    case 3:
        currentDay = "Wednesday"
        break;
    case 4:
        currentDay = "Thursday"
        break;
    case 5:
        currentDay = "Friday"
        break;
    case 6:
        currentDay = "Saturday"
        break;
    default: "default  ამ შემთხვევაში არ დაგვჭირდე <3"
        break;
 };

 console.log(`Today is ${currentDay}.`);

//  1. დაწერეთ for ციკლი 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i;

for (let index = 0; index < 100; index++) {
    console.log(index);
};

// 2. დაწერეთ while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i;

let k = 0;

while (k<50) {
    console.log (k);
    k+=1;
};

// 3.შექმენით 5 ელემენტიანი  მასივი, სადაც დაამატებთ სახელებს, გამოიყენეთ pop,shift,unshift,push მეთოდები და განახორციელეთ სხვადასხვა სახელების წაშლა/დამატება. დალოგეთ თითოეული ქმედების შემდგომ  მასივის მნიშვნელობა. ისე როგორც ლექციაზე გავაკეთეთ;

const fruitArray = ["banana", "apple", "pineapple", "melon", "grape"]

fruitArray.shift();
console.log(fruitArray);

fruitArray.unshift("lemon");
console.log(fruitArray);

fruitArray.pop();
console.log(fruitArray);

fruitArray.push("cherry", "peach", "cocoa")
console.log(fruitArray);

// 4. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 10000 - მდე ამ ,მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i) მასივში ჩაწერა ხდება push მეთოდის საშუალებით ლექციის ფაილში გვიწერია;

const carArray = [];

for (let index = 0; index < 10000; index++) {
    const element = index*index;
    carArray.push(element);
}
console.log(carArray);

let q = 0;

while (q<10000) {
    carArray.push(q*q);
    q+=1;
};
console.log(carArray);

// 5.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი და for ცილის გამოყენებით დათვალეთ ჯამი;

const numberArray_2 = [10, 236, 88, 9128, 811, 98, 8745];

let numberArray_2_sum = 0;

for (let index = 0; index < numberArray_2.length; index++) {
    numberArray_2_sum = numberArray_2_sum + numberArray_2[index];
};

console.log(numberArray_2_sum);

// 6. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის კენტი ან false -ს თუ რიცხვი არის ლუწი;

function oddNumber(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
console.log(numberArray_2.filter(oddNumber));

function evenNumber(num) {
    if (num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
};
console.log(numberArray_2.filter(evenNumber));

// 7.დაწერეთ ფუნქცია, რომელიც მიიღებს UpperCase სტრინგს მაგ (MY NAME IS JOHN) და დააბრუნებს LowerCase (my name is john) სტრინგს;

const carArray_2 = ["Bmw", "mercedes-benz", "audi", "maserati", "ferrari", "lamborghini"]

for (let index = 0; index < carArray_2.length; index++) {
    const element = carArray_2[index];
    if (element.length<5) {
        console.log(element.toLocaleUpperCase())
    } else {
        console.log(`${element.toLocaleLowerCase()} has more than 5 letter.`)
    };
};

// 8. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება;

const numberArray_3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// გამვოვიყენოთ მე-6 დავალებაში დაწერილი ფუნქცია:
console.log(numberArray_3.filter(oddNumber));
console.log(numberArray_3.filter(evenNumber));



// ახალი დავალება

// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი  არის 3ის ჯერადი , ხოლო თუ არაა მაშნ false-ს;

const multipleOfThree = (three) => {
    if (three % 3 === 0) {
        return true;
    } else {
        return false;
    }
};

const three = multipleOfThree;
console.log(numberArray_3.filter(three));

// მე-2 გზა
const three_2 = (multipleOfThree) => multipleOfThree % 3 === 0 ? true:false; 
console.log(numberArray_3.filter(three_2));


// 2. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი;

const getCurrencySymbolFromCode = (string) => {
    if (string === "GEL") {
        return console.log('ლ');
    };
    if (string === "USD") {
        return console.log('$');
    };
    if (string === "EUR") {
        return console.log('€');
    }
    else{
         return console.log(string)
    };
};
getCurrencySymbolFromCode("GEL");


// 3. დაწერეთ ფუნქცია, რომელიც მიიღებს lowerCase სტრინგს მაგ (my name is joe) და დააბრუნებს UpperCase (MY NAME IS JOE) სტრინგს;

const getUpperCase = (strings) => {
     console.log(strings.toLocaleUpperCase());
};
const getLowerCase = (strings_2) => {
    console.log(strings_2.toLocaleLowerCase());
};

let strings = "my name is john and i live in USA.";
getUpperCase(strings);

let strings_2 = "MY NAME IS JOHN AND I LIVE IN USA."
getLowerCase(strings_2);


// 4.  დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს გასაყიდ და ასაღებ ფასს, დათვლის მოგებას  და დააბრუნებს გასაყიდი ფასის რა პროცენტს შეადგენს მოგება;

// x-ასაღები ფასი;
// y-გასაყიდი ფასი;

const getProfit = (x, y) => {
    return (y-x)/y;
}
console.log(getProfit(1,5));

// let coca_cola = (0.95, 1.8);

// console.log(getProfit(coca_cola))- კონსოლში არ გამოაქვს არაფერი და რატომ?
// getProfit(coca_cola)- ამ ჩანაწერით საერთოდ არ ბეჭდავს;
// console.log(coca_cola.filter(getProfit))- აქ მიწერს რომ coca_cola.filter არ არის ფუნქციაო და რატომ?


// 5. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება;

const multipleArray = [23,1,6,8,9,2,4,23,65,76,88];

const evenNumberFunction = (number) => number % 2 === 0 ? true:false;
const oddNumberFunction = (number) => number % 2 !== 0 ? true:false;

console.log(multipleArray.filter(evenNumberFunction));
console.log(multipleArray.filter(oddNumberFunction));


// 6. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს (ობიექტს უნდა ქონდეს ველი name) და მეორე პარამეტრად მიიღებს სტრინგს და ამ მასივში .find ით მოვძებნოთ ობიექტის name === ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი;

const humanArray = [
    {
        userName : "nika",
        age : 20,
    },
    {
        userName : "davita",
        age : 21,
    }
];

const findByName = (person) => {
    return person.userName === "nika";
}

console.log(humanArray.find(findByName));
console.log(humanArray.findIndex(findByName));



// დამატებითი დ ა ვ ა ლ ე ბ ა

// დავალება 4

let div = document.createElement('div');

div.className = 'text';

div.innerHTML = '<p> hello world </p>';

document.body.appendChild(div);


// დავალება 5

const navigationList = ['Home', 'Flash sale', 'Blogs', 'contact us', 'about us'];

let ul = document.createElement('ul');

ul.id = 'ul';

ul.innerHTML = `<li> ${navigationList[0]} </li>`;

document.body.appendChild(ul);


let li = document.createElement('li');
li.textContent = navigationList[1];
ul.appendChild(li);

li = document.createElement('li');
li.textContent = navigationList[2];
ul.appendChild(li);

li = document.createElement('li');
li.textContent = navigationList[3];
ul.appendChild(li);

li = document.createElement('li');
li.textContent = navigationList[4];
ul.appendChild(li);






