const stringTest: string = "not empty string";
const numberTest: number = 147;
const booleanTest: boolean = true;

const arrayType1: number[] = [1, 2, 3, 4];
const arrayType2: Array<number> = [1, 2, 3, 4];

enum Color {
  Red = "red",
  Blue = "blue",
}

let colorName: Color = Color.Blue;

function testVoid(value: any): void {
  console.log(`test void ${value}`);
}

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
