/**
 * 再帰使わなかった
 * 普通の素数判定
 */

const isPrime = num => {
  let count = 0
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++
    if (count > 2) break
  }

  return count === 2
}

Array.from(Array(100).keys()).map(e => e + 1)
  .forEach(e => console.log(`${e.toString().padStart(5)}: ${isPrime(e)}`))
