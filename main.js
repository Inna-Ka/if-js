let user = 'John doe';
console.log(user);
let student = 'Inna';
console.log(student);
user = student;
// user become = Inna
console.log(user);
let test = 1;
test++;
test += '1';
// test = 21 and will string
console.log(test);
test -= 1;
// test=20 and will number
console.log(test);
test = !!0;
// console will show "false"
console.log(test);

let result = 1;
let array = [2, 3, 5, 8];
for (let i = 0; i < array.length; i++) {
  result *= array[i]
}
console.log (result);

let array2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < array2.length; i++) {
  if (array2[i] > 5 && array2[i] < 10) {
    console.log (array2[i]);
  }
}

let array3= [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < array3.length; i++) {
  if (array3[i] % 2 === 0) {
    console.log (array3[i]);
  }
}

function palindrome(str) {
  return str === str.split('').reverse('').join('');
}
console.log(palindrome('lol'));
console.log(palindrome('capital'));

function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}
console.log(min(4, 6));

function minTernary(a, b) {
  return (a < b) ? a : b
}
console.log(minTernary(2, 8));

function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
console.log(max(4, 6));

function maxTernary(a, b) {
  return (a > b) ? a : b
}
console.log(maxTernary(5, 9));

const arrayWithZero = [0, 15, 20, 33, 40, 100, 56, 80, 99, 41];
console.log(arrayWithZero);
for (let i = 0; i < arrayWithZero.length; i++) {
  if (arrayWithZero[i] % 10 === 0) {
    arrayWithZero[i] /= 10;
    if (arrayWithZero[i] / 10 === 0) {
      arrayWithZero[i] = '';
    }
    if (arrayWithZero[i] / 10 === 1) {
      arrayWithZero[i] /= 10;
      arrayWithZero[i] += 'zero';
    }
    arrayWithZero[i] += 'zero';
  }
}
console.log(arrayWithZero);
