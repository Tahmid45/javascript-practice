var result = 80;

if(result < 0 ){
    console.log("failed");
}
else if(result >= 0 && result <40){
    console.log("tumi c grade paicho");
}
else if(result >= 40 && result < 60){
    console.log("tumi B grade paicho");
}
else if(result >= 60 && result < 70){
    console.log("tumi A- grade paichi");
}
else if(result >= 70 && result < 80){
    console.log("tumi A geade paicho");
}
else if(result >= 80 && result <= 100){
    console.log("Tumi A+ grade paicho");
}
else{
    console.log("Invalid");
}