var input = prompt("Enter a list of items separated by commas:");
var array = input.split(",");
var livingCost = promt("Enter living cost:")

function monthlySavings(arr, livingCost){
  let result = Array.isArray(arr);
  if(result){
    var total_income = 0;
    var len = arr.length;
    while (len--) {
      if (arr[len] > 3000) {
        arr[len] =arr[len] - arr[len]*.2;
        total_income = total_income + arr[len];
      }
      else{
        total_income = total_income + arr[len];
      }
    }
    return total_income - livingCost;
  }
  else{
    console.log("Invaild Input");
  }
    
}

var x = monthlySavings(arr, livingCost);

if ( x >= 0){
  console.log(x);
}
else if(x < 0){
  console.log("Earn More");
}