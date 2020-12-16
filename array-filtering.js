var numbers = [1,2,3,4,5,6,7,8,9,10]

var check_even = numbers.filter(function(x) {
  return x % 2 === 0;
})

console.log(check_even)

