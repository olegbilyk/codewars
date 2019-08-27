/*
  Title:
    Sum of Intervals

  Description:
    Write a function called `sumIntervals`/`sum_intervals()` that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

    ### Intervals

    Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: `[1, 5]` is an interval from 1 to 5. The length of this interval is 4.

    ### Overlapping Intervals

    List containing overlapping intervals:

    ```
    [
       [1,4],
       [7, 10],
       [3, 5]
    ]
    ```

    The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

    ### Examples:

    ```javascript
    sumIntervals( [
       [1,2],
       [6, 10],
       [11, 15]
    ] ); // => 9

    sumIntervals( [
       [1,4],
       [7, 10],
       [3, 5]
    ] ); // => 7

    sumIntervals( [
       [1,5],
       [10, 20],
       [1, 6],
       [16, 19],
       [5, 11]
    ] ); // => 19
    ```

    ```java
    // null argument
    Interval.sumIntervals(null);  // => 0

    // empty intervals
    Interval.sumIntervals(new int[][]{});  // => 0
    Interval.sumIntervals(new int[][]{2,2}, {5,5});  // => 0

    // disjoined intervals
    Interval.sumIntervals(new int[][]{
      {1,2},{3,5}
    });  // => (2-1) + (5-3) = 3

    // overlapping intervals
    Interval.sumIntervals(new int[][]{
      {1,4},{3,6},{2,8}
    });  // [1,8] => 7
    ```
    ```C#
    // empty intervals
    Intervals.SumIntervals(new (int, int)[]{ });  // => 0
    Intervals.SumIntervals(new (int, int)[]{ (2, 2), (5, 5)});  // => 0

    // disjoined intervals
    Intervals.SumIntervals(new (int, int)[]{
      (1, 2), (3, 5)
    });  // => (2-1) + (5-3) = 3

    // overlapping intervals
    Intervals.SumIntervals(new (int, int)[]{
      (1, 4), (3, 6), (2, 8)
    });  // (1,8) => 7
    ```
    ```cpp
    sum_intervals( {
       {1,2},
       {6, 10},
       {11, 15}
    } ); // => 9

    sum_intervals( {
       {1,4},
       {7, 10},
       {3, 5}
    } ); // => 7

    sum_intervals( {
       {1,5},
       {10, 20},
       {1, 6},
       {16, 19},
       {5, 11}
    } ); // => 19
    ```
    ```clojure
    (sum-intervals [ [1 5] [10 15] [-1 3] ]) ; => 11

    (sum-intervals [ [1 5] ]) ; => 4
    ```

  Kata Link:
    https://www.codewars.com/kata/sum-of-intervals

  Discuss Link:
    https://www.codewars.com/kata/sum-of-intervals/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-intervals/solutions

  Tags:
    #ALGORITHMS, #LOGIC, #AGGREGATIONS, #ARITHMETIC, #MATHEMATICS, #NUMBERS, #DATA TYPES, #INTEGERS
*/

function sumIntervals(intervals) {
  const numbers = [];

  intervals.forEach(interval => {
    console.log(interval[0]);

    for (let i = interval[0]; i < interval[1]; i++) {
      if (~numbers.indexOf(i)) numbers.push(i);
    }
  });

  return numbers.length;
}

const test1 = [[1, 5]];
const test2 = [[1, 5], [6, 10]];
const test3 = [[1, 5], [1, 5]];
const test4 = [[1, 4], [7, 10], [3, 5]];
const test5 = [[1, 20], [2, 19], [5, 15], [8, 12]];

console.log(sumIntervals(test1), 4);
console.log(sumIntervals(test2), 8);
console.log(sumIntervals(test3), 4);
console.log(sumIntervals(test4), 7);
console.log(sumIntervals(test5), 19);
