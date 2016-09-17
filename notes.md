## const let && var

```

const is a read only variable
let and var are mutable

const name = 'Dwight';
name = 'John'; // error cant reassign a constant varialbe

const person = {name: 'dwight'};
person.name = 'john'; // no error, const person a read only refference to person. properties are mutable


let x = 10;
if (true) {
  let x = 5;
  // this x only exists inside this block
}

console.log(x); => 10

var x = 10;
if (true) {
  var x = 5;
}

console.log(x); => 5
```

## arrow fns
#### arguments
```
  const myFn = (arg1, arg2) => {
    console.log(arg1, arg2);
  };

  const myOtherFn = (arg1) => {
    console.log(arg1);
  };

  const anotherFn = arg1 => {
    console.log(arg1);
  };

  myOtherFn and anotherFn are pretty much equivalent
```

#### implicit/explicit return
```
const add = (a, b) => {
  return a + b;
};

const add = (a, b) => (
  a + b
);


gotchas
const multiply = (a, b) => {
  console.log(a, b);
  return a * b;
};

const divide = (a, b) => (
  console.log(a, b, 'no console logs in implicit returns');
  a / b;
)
```

#### this
arrow fns don't have a `this`
```
$('button').on('click', () => {
  $(this).addClass('danger');
  // error "this" does not point to the button
  // it points to the surrounding scope
});
```
[Todd Motto has more here](https://toddmotto.com/es6-arrow-functions-syntaxes-and-lexical-scoping/)


## Destructuring

#### objects
```
const person = {
  name: 'Bob',
  age: 40,
  occupation: 'Model',
}

const { name, age, occupation } = person;

console.log(name);
console.log(age);
// etc...

is the same as:
var name = person.name;
var age = person.age;
console.log(name);
console.log(age);
// etc...


```

#### array Destructuring
```
var a, b;
[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]
```


#### Template Strings/Literals

```
const { name, age, occupation } = person;

const message = `${name} is ${age} years old. He is a(n) ${occupation}`;

= Bob is 40 years old. He is a(n) Model.

instead of

const message = person.name + ' is ' + person.age + 'years old. He is a(n) ' + person.occupation;


const html = `
  <html>
  <body>
    <p>Oh look multiline strings</p>
    <p>Good luck doing that in es5</p>
  </body>
  </html>
`;
```

#### short hand methods
```
const myObject = {
  name: 'Dwight',
  sayName() {
    alert(`my name is ${this.name}`)
  }
}

is the same as
var myObject = {
  name: 'Dwight',
  sayName: function sayName() {
    alert('my name is ' + this.name);
  }
};
```

#### Classes
```
javascript doesn't have Classes
js is prototypical
```

read more here[Exploring ES6](https://leanpub.com/exploring-es6/)

play around with es6 and see how it looks in es5
[Babel REPL](http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&code=)
