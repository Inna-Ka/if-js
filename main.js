let user = 'John doe';
console.log (user);
let student = 'Inna';
console.log (student);
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
if (test > 10) {
  test = true;
} else {
  test = false;
}
// console will show "true"
console.log(test);