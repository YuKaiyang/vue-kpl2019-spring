const arr = [5, 4, 3, 2, 1, 6, 7, 8, 9]

let time = 0


const pop = function (arr) {
  const res = [...arr]
  for (let i = 0; i < res.length - 1; i++) {
    for (let j = 0; j < res.length - 1 - i; j++) {
      let temp
      time++
      if (res[j] > res[j + 1]) {
        temp = res[j]
        res[j] = res[j + 1]
        res[j + 1] = temp
      }
    }
  }
  return res
}

console.log(pop(arr))
// pop(arr)
console.log(time)

const fun1 = function (n) {
  let res = 0
  while (n > 0) {
    res += n--
  }
  return res
}

console.log(fun1(arr.length - 1))