var num = prompt("Enter year: ");

if(num%4 == 0 && num%100 != 100 || num%400 == 0){
    console.log("Leap Year.");
}
else{
    console.log("Not leap year.");
}