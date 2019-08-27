// https://www.codewars.com/kata/write-number-in-expanded-form-part-2/train/javascript
function expandedForm(num) {
  const arr = `${num}`.split('.')

  return expandedFormInt(arr[0]) + expandedFormDec(arr[1]);
}

function expandedFormInt(arr) {
  let m = 1
  let res = ''
  const resArr = []

  for (let end = arr.length - 1, i = end; i >= 0; i--) {
    if (arr[i] !== '0') {
      resArr.push(`${arr[i] * m}`)
    }

    m *= 10
  }

  if (resArr.length) {
    res += resArr.reverse().join(' + ') + ' + '
  }

  return res
}

function expandedFormDec(arr) {
  let m = 1
  let res = ''

  for (let i = 0, end = arr.length; i < end; i++) {
    m *= 10

    if (arr[i] !== '0') {
      res += `${arr[i]}/${m}`

      if (i + 1 !== end) {
        res += ' + '
      }
    }
  }

  return res
}

console.log(expandedForm(1.24), '---- 1 + 2/10 + 4/100')
// console.log(expandedForm(4.28), '4 + 2/10 + 8/100')
// console.log(expandedForm(7.304), '7 + 3/10 + 4/1000')
// console.log(expandedForm(0.04), '4/100')
// console.log(expandedForm(88.353824), '---- 8 + 8 + 3/10 + 5/100 + 3/1000 + 8/10000 + 2/100000 + 4/1000000')
// console.log(expandedForm(0.004), '---- 8 + 8 + 3/10 + 5/100 + 3/1000 + 8/10000 + 2/100000 + 4/1000000')
