const factorial = num => num === 0 ? 1 : num * factorial(num - 1)

Array.from({ length: 20 }, (v, i) => i + 1).forEach(e => {
  console.log(`${e.toString().padStart(3)}: ${factorial(e)}`)
})
