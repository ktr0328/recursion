const fizzBuzzHelper = num => {
  let result = ''
  result = num % 3 ? result : result + 'Fizz'
  result = num % 5 ? result : result + 'Buzz'
  result = result || num
  return result
}

/**
* 再帰
*
* @param {number} num: start
* @param {number} [end=20]: end
*/
const loop = (num, end = 20) => {
  if (num === end + 1) return
  console.log(fizzBuzzHelper(num))
  loop(num + 1, end)
}

loop(20, 100)
