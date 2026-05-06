
// Problem 1
function filterEvenNumbers(arr: number[]): number[] {
  return arr.filter(num => num % 2 === 0);
}

// Problem 2
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}
 
// Problem 3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}

// Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface BookWithReadStatus extends Book {
  isRead: boolean;
}

function toggleReadStatus(book: Book): BookWithReadStatus {
  return {
    ...book,
    isRead: true, 
  };
}

// Problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);  
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7
function getIntersection(source: number[], target: number[]): number[] {
  const targetSet = new Set(target);
  return source.filter(num => targetSet.has(num));
}


