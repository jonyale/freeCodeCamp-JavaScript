// Working solution I did but had seen before
function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  // assume the solution is max
  let multiple = max;
  // check if multiple is divisible by all numbers between
  // it and min inclusive
  for (let i = max - 1; i >= min ;i--) {
    if (multiple % i) {
      // if it's not increment it by max until it is
      multiple += max;
      i = max;
    }
  }
  return multiple;
}


function smallestCommons(arr) {
  let sortedArr = arr.sort((a, b) =>
    a < b ? 1: a > b ? -1: 0);
  console.log(sortedArr);
  let range = []; 
  let i = sortedArr[0];
  while (i > 0) {
    range.push(i);
    i--;
  }
  console.log(range);
  console.log(range[0]);
  console.log(range[1]);
  return (Math.abs(range[0] * range[1])) /
      gcd(range[0], range[1]);
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b)
}

smallestCommons([1,5]);
// smallestCommons([23, 18]);

// console.log(gcd(27, 30));
console.log(smallestCommons([1,5]));
console.log();
console.log();
console.log();
console.log();

// resources used
// https://en.wikipedia.org/wiki/Least_common_multiple
// https://en.wikipedia.org/wiki/Euclidean_algorithm


// trying to understand. failing
// const smallestCommons = arr => {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);

//   console.log(`max, min = ${max}, ${min}`);

//   let sol = max;

//   console.log(`sol initial = ${sol}`);

//   for (let i = max - 1; i >= min; i--) {
//     if (sol % i) {
//       sol += max;
//       console.log(`sol${i} = ${sol}`);
//       i = max;
//       console.log(`max${i} = ${max}`);
//     }
//   }

//   console.log(`Final sol = ${sol}`);

//   return sol;
// };

// // test here
// smallestCommons([1, 5]);