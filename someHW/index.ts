//string
// let str = 'string!';
// // str = 10; will be an issue
// str = 'string!';
let str:string = 'string!'; // write a type obviously

//number
let num: number = 10;

//boolean
let isTrue: boolean = true;
let isFalse: boolean = false;
isTrue = false; // can be
// isTrue = 1; can't be

//other
//first way
// let unknown: any = '1';
// unknown = 1;
// unknown = true;

//second way
let unknown: string | number | boolean = '1';
unknown = 1;
unknown = 'hello';
unknown = true;



