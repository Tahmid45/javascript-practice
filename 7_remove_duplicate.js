var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function removeDup(data){
    return data.filter((value,index) => data.indexOf(value) === index);
}

console.log(removeDup(numbers));