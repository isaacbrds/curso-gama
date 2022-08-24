function fizzBuzz(entry){
  if(typeof(entry) !== 'number'){
    return 'It\'s not a number'
  }
  if ((entry % 3 === 0) && (entry % 5 === 0)){
    return 'FizzBuzz'
  } else if (entry % 3 === 0){
    return 'Fizz'
  } else if (entry % 5 === 0){
    return 'Buzz'
  }else {
    return entry
  }
}

let result = fizzBuzz(31)
console.log(result)

let newStr = '';

function reverseAString(str) {

  for (let i = Number.parseInt(str.length - 1); i >= 0; i--) {
    newStr += str[i]
    console.log(newStr)
  }
}

reverseAString('Hello')