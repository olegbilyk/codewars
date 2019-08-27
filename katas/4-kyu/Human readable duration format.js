/*
  Title:
    Adding Big Numbers

  Description:
    Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

    The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

    It is much easier to understand with an example:

    formatDuration(62)    // returns "1 minute and 2 seconds"
    formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
    For the purpose of this Kata, a year is 365 days and a day is 24 hours.

    Note that spaces are important.

    Detailed rules
    The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

    The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

    A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

    Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

    A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

    A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

  Kata Link:
    https://www.codewars.com/kata/human-readable-duration-format/train/javascript

  Discuss Link:
    https://www.codewars.com/kata/human-readable-duration-format/discuss

  Solutions Link:
    https://www.codewars.com/kata/human-readable-duration-format/solutions
*/

function formatDuration(seconds) {
  if (seconds === 0) return 'now';

  const date = new Date(seconds * 1000);
  const year = date.getYear() - 70;
  const day = Math.floor(seconds / 86400) % 365;
  const hour = date.getUTCHours();
  const minute = date.getMinutes();
  const sec = date.getSeconds();

  return [
    [year, year > 1 ? 'years' : 'year'],
    [day, day > 1 ? 'days' : 'day'],
    [hour, hour > 1 ? 'hours' : 'hour'],
    [minute, minute > 1 ? 'minutes' : 'minute'],
    [sec, sec > 1 ? 'seconds' : 'second'],
  ]
    .filter(([val]) => val > 0)
    .map(item => item.join(' '))
    .join(', ')
    .replace(new RegExp('(^.+),(.+)'), '$1 and$2');
}

// console.log(formatDuration(1), "1 second");
// console.log(formatDuration(62), "1 minute and 2 seconds");
// console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), '1 hour');
// console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
// console.log(formatDuration(33243586));
// console.log("1 year, 19 days, 18 hours, 19 minutes and 46 seconds");
