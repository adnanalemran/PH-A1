
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



