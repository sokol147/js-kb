interface IDefaultObject {
  name: string;
  age: number;
  jobTitle: IJobTitle;
  promotion?: boolean;
  readonly newPosition: string;
}

interface IJobTitle {
  role: string;
  title: string;
}

const dev1: IDefaultObject = {
  name: "Test",
  age: 19,
  jobTitle: {
    role: "dev",
    title: "jun",
  },
  newPosition: "middle",
};

let readOnlyArray: ReadonlyArray<number> = [1, 2, 3, 4];
// readOnlyArray.push(6); // Error readonly

function searchString(string: string, subString: string): string {
  return string;
}

interface Shape {
  type: string;
  formula?: string;
}
interface Square extends Shape {
  length: number;
}

const square1: Square = {
  type: "square",
  length: 2,
};
