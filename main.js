var initialPrice= document.querySelector("#initial-price");
var Qauntity = document.querySelector("#quantity");
var CurrentPrice = document.querySelector("#current-price");

var output= document.querySelector("#output");
var btn = document.querySelector("#submit");

// var ip = initialPrice.value;
// var qp = Qauntity.value;
// var cp= CurrentPrice.value;

function calculateProfitAndLoss(ip,qp,cp){
 if(ip>cp){
    var loss = (ip-cp)* qp;
    var lossPercentage = (loss/ip)*100;
    console.log(lossPercentage);
    showOutPut(`your profit is ${loss} and your profit-percentage is ${lossPercentage}%`);

 }
 else if(cp>ip){
    var profit = (cp-ip)*qp;
    var profitPercentage= (profit/ip)*100;
    console.log(profitPercentage);
    showOutPut(`your profit is ${profit} and your profit-percentage is ${profitPercentage}%`);
    

 }   
 else{
    //console.log("No pain no gain , no gain no pain");
    showOutPut("No pain no gain , no gain no pain");

 }
}

function calculate(){
    var ip = initialPrice.value;
    var qp = Qauntity.value;
    var cp= CurrentPrice.value;
    calculateProfitAndLoss(ip,qp,cp)
}

btn.addEventListener("click",calculate);

function showOutPut(msg){
    output.innerText=msg;
}