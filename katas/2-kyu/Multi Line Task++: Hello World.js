/*
  Title:
    Multi Line Task∞: Hello World

  Description:
    You need to write a function f that returns the string Hello, world!.
    Requirement: Every line must have at most 2 characters, and total number of lines must be less than 40.
    Hint: It's possible to complete this in 28 lines only.
    (Even) harder verion: https://www.codewars.com/kata/59a421985eb5d4bb41000031

  Kata Link:
    https://www.codewars.com/kata/multi-line-task-plus-plus-hello-world/train/javascript

  Discuss Link:
    https://www.codewars.com/kata/multi-line-task-plus-plus-hello-world/discuss

  Solutions Link:
    https://www.codewars.com/kata/multi-line-task-plus-plus-hello-world/solutions

  Tags:
    #FUNDAMENTALS
*/
/* prettier-ignore */

f=
''
[
'\
s\
l\
i\
c\
e'
][
'\
b\
i\
n\
d'
](
'\
H\
e\
l\
l\
o\
,\
 \
w\
o\
r\
l\
d\
!\
')

console.log('TEST', f() === 'Hello, world!');
console.log(f(), 'Hello, world!');
