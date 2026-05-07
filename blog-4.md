# How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

In small projects, we can often manage everything with simple functions.  
But in large TypeScript projects, logic grows fast: more modules, more features, more developers, and more edge cases.

That is where OOP helps a lot.

The four pillars of OOP (Inheritance, Polymorphism, Abstraction, Encapsulation) give us a clean structure so code stays organized and easier to maintain.

## 1) Inheritance - reuse common logic

Inheritance lets one class use properties and methods from another class.

```ts
class Person {
  constructor(public name: string) {}

  introduce() {
    return `Hi, I am ${this.name}`;
  }
}

class Developer extends Person {
  constructor(name: string, public stack: string) {
    super(name);
  }
}
```

Now `Developer` automatically gets `introduce()` from `Person`.  
In big projects, this avoids rewriting shared logic and keeps code DRY.

## 2) Polymorphism - one interface, different behavior

Polymorphism means same method name can behave differently based on class.

```ts
class Payment {
  pay(amount: number): string {
    return `Paid ${amount}`;
  }
}

class CardPayment extends Payment {
  pay(amount: number): string {
    return `Paid ${amount} using card`;
  }
}

class MobilePayment extends Payment {
  pay(amount: number): string {
    return `Paid ${amount} using mobile wallet`;
  }
}
```

We can call `pay()` for all payment types, but each class handles it differently.  
This makes systems flexible when new behavior is added later.

## 3) Abstraction - focus on what, hide how

Abstraction hides implementation details and exposes only required structure.

```ts
abstract class Notification {
  abstract send(message: string): void;
}

class EmailNotification extends Notification {
  send(message: string) {
    console.log(`Email sent: ${message}`);
  }
}
```

Other parts of the app only need to know `send()` exists.  
They do not need to know email server details. This reduces mental load.

## 4) Encapsulation - protect internal state

Encapsulation means keeping class data safe by controlling access.

```ts
class BankAccount {
  private balance = 0;

  deposit(amount: number) {
    if (amount > 0) this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

Here `balance` cannot be changed directly from outside the class.  
This prevents accidental bugs and keeps state consistent.

## How these reduce complexity in large projects

In large-scale TypeScript apps:
- **Inheritance** reduces duplicate code
- **Polymorphism** keeps feature extension clean
- **Abstraction** separates contract from implementation
- **Encapsulation** prevents unsafe direct access to data

Together, they make code easier to test, refactor, and scale with team size.
 