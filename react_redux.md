# React & Redux
## Menu
 - [Chapter One](#chapter_one)
    - [Review JS](#javascript_function)
    - [Super Class](#javascript_with_extends_super_class)
    - [Combine lists](#javascript_with_list_of_numbers)



## Chapter One

### Javascript function

```javascript
function myFun(){
...
}

Example
function myName(name){
   console.log(name);
}

myName('Marry');

```

- Arrow function

```javascript
const myFnc = {}=>
```

```javascript
Example 1:

const myName = name =>{
console.log(name);
}

myName('Kristy');
```
```javascript
Example 2:

const myName = name =>{
return name;
}

console.log('Kristy');

```

### Javascript with extends super class

```javascript
class Human{
  constructor(){
    this.gender = 'female';
  }
  printGender(){
    console.log(this.gender);
  }
}

const human = new Human(); // return 'female'

human.printGender(this.gender);


class Person extends Human{
  constructor (){
    super();
    this.name = 'Kristy';
    this.gender = 'male';
  }
  printMyname(){
    console.log(this.name);
  }
}

const person = new Person(); //

person.printMyname(); // return 'Kristy'
person.printGender(); // return 'male';

```

### Javascript with list of numbers

- combine list together

```javascript
const number =[1,2,3];
const newNumbers = [...number,4,5,6];

console.log(newNumbers); // return 1,2,3,4,5,6
```

- combine the element and list of new number

```javascript
const number =[1,2,3];
const newNumbers = [number,4,5,6];

console.log(newNumbers); //return [][1,2,3],4,5,6]
```

### Javascript with deconstructing

```javascript
const numbers = [1,2,3];
[num1, ,num3] = numbers;

console.log(num1,num3); // return 1 and 3
```

### Javascript with Primitive type and Reference type

- primitive type

```javascript
const number = 1;
const num2 = number;

console.log(num2);
```

- Javascript with

```ES6
const person ={
  name: 'Max'
};

const secondperson={
  ...person
};

// person.name = 'Baby';

console.log(secondperson); // reutnr Max
```
