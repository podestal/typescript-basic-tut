// LESSON 1

let username = 'John'
console.log(username)

let a = 12 
let b = 6
let c = 2
// console.log(a / b);
// console.log(c * b);

// LESSON 2
let myName: string = 'Dave'
let meaningOfLife: number
let isLoading: boolean
let album: any

myName = 'John'
meaningOfLife = 42
isLoading = true
album = 5150

const sum = (a: number , b: string) => {
    return a + b
}

// console.log(sum(14, 20))
let postId: string | number
let isActive: number | boolean | string
let re: RegExp = /\w+/g

// LESSON 3

let stringArr: string[] = ['one', 'hey', 'Dave']
let guitars: (string | number)[] = ['Strat', 'Les Paul', 5150]
let mixedData: any[] = ['EVH', 1984, true]

let bands: string[] = []
bands.push('Van Halen')
console.log(bands);

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]
let mixed = ['John', 1, false]

// Object
let myObj: object
myObj = []
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true
}

type Guitarist = {
    name: string,
    active?: boolean,
    albuns: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eric',
    active: true,
    albuns: [1984, 5150, 'OU812']
}

let JP: Guitarist = {
    name: 'Jimmy',
    albuns: ['I', 'II', 'IV']
}

// evh = JP

// console.log('evh', evh);
const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}`
}

console.log(greetGuitarist(evh));

// Enums

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log('Grade', Grade.D);



