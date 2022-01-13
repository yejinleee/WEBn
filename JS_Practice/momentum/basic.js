const makeArray = ['a','b','c']
// to push something new
makeArray.push('d')
console.log(makeArray)

// object
const player = {
  name : "yejin",
  points : 10,
};
console.log(player.name);
// const 안의 객체 하나씩은 수정 가능. const 전체를 수정은 X!

const calculator = {
  plus:function(a,b){
    console.log(a+b);
  },
  minus:function(a,b){
    console.log(a-b);
  },
  powerof:function(a,b){
    console.log(a**b);
  },
};
calculator.plus(1,2);
calculator.minus(5,3);
calculator.powerof(2,4);

a = "14"
console.log(isNaN(a));
console.log(parseInt(a), typeof(parseInt(a)))
