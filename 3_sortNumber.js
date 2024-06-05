var num = [1, 5, 2 , 4, 16, 3, 8, 17, 6, 9, 11, 10, 19, 14, 20, 13, 18, 7, 15];
num.sort(compareFun);
console.log(num);

function compareFun(a, b){
    return a - b;
}