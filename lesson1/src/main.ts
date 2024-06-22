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

// LESSON 4

// Type Aliases
type stringOrNumber = string | number
type stringOrNumberArray = stringOrNumber[]

type GuitaristFull = {
    name: string,
    active?: boolean,
    albuns: stringOrNumberArray
}


// Literal Types

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Dave'

// Fnxs

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
    
}

logMsg('Hello')
logMsg(add(2, 3))

type mathFunction = (a: number, b: number) => number

// interface mathFunction {(a: number, b: number) : number}

let multiply: mathFunction = (c, d) => {
    return c*d
}

logMsg(multiply(2, 2))

const addAll = (a: number, b: number, c?: number): number => {
    if (c) {
        return a + b + c
    }
    return a + b
}

logMsg(addAll(5, 7, 1))

// REST Parameters

const total = (...numbs: number[]): number => {
    return numbs.reduce((prev, curr) => prev + curr)
}

console.log(total(1, 2, 3, 4));

//  never type

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}


