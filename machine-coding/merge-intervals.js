/**
 * Given a list of intervals, merge them to get a list of non-overlapping intervals.

intervali = [starti, endi]

Example:
Intervals: [[1, 2], [2, 3], [1, 4], [5, 6]]

[1, 2] and [2, 3] can be merged to form [1, 3].
Now, [1, 3] and [1, 4] can be merged to form [1, 4].
[1, 4] and [5, 6] have no intersection.
Hence above intervals are merged to form:
[[1, 4], [5, 6]]

Note that the final list should be in ascending order.
 */

/**
 * 1. Sort intervals in ascending order.
 * 2. can't use map because no. of intervals are different in input and output and map doesnt allow that.
 * 3 .can't use filter too .
 * 4. use reducer : acc, interval
 * if acc[lasti interval] ka end >= curr interval's start then [...acc.slice(-1), [prev interval's start, this end]]
 * [...accc, curr interval]
 */

const mergeIntervals = (arr) => {
  const sorted = arr.sort((a, b) => a[0] - b[0]);
  console.log(sorted);
  return sorted.reduce((acc, interval) => {
    const prevEl = acc[acc.length - 1];
    if (!prevEl) return [interval];
    const [prevStart, prevEnd] = prevEl;
    const [currStart, currEnd] = interval;

    if (prevEnd >= currStart) {
      return [
        ...acc.slice(0, acc.length - 1),
        [Math.min(prevStart, currStart), Math.max(prevEnd, currEnd)],
      ];
    } else {
      return [...acc, interval];
    }
  }, []);
};

res = mergeIntervals([
  [1, 2],
  [2, 3],
  [1, 4],
  [5, 6],
]);

console.log(res);
