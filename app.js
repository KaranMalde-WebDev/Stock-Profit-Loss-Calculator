var initial = document.querySelector("#initial-price")
var stockvalue = document.querySelector("#stocks-quantity")
var todayprice = document.querySelector("#current-price")


var check = document.querySelector("#submit-btn")
var output = document.querySelector("#output-box")

//var calc = (initial * stockvalue)

//var diff = (todayprice - initial)







check.addEventListener("click",() =>
{
 // var calc = (initial) * (stockvalue)
 required()
// console.log(initial.value)

/*var diff = (todayprice - initial)

console.log(initial)
console.log(typeof(calc))
console.log(diff)}*/
}) 

     function required()
     {
       var x = initial.value;
       var y = stockvalue.value
       var z = todayprice.value
       
       if (x == "" || y=="" || z=="")
       { 
         output.innerHTML = ("input is required")
       }
       else{ 
               multiply()
       }
     }

function multiply(){
   var sum = initial.value * stockvalue.value;
   var final = todayprice.value * stockvalue.value
   var diff = final - sum 
   var profitpercent =(diff*100 )/ sum
   var loss = sum - final
   var losspercentage = (loss/sum ) * 100
   var abs = (final - sum) / sum * 100
  //  console.log(sum)
  //  console.log(diff)
  //  console.log(profitpercent.toFixed(2) + "%")
  //  console.log(final)
  //  console.log(losspercentage.toFixed(2))
  //  console.log(abs)
 /* output.innerHTML= ("your profit percent is " + profitpercent + "and profit is " + diff)*/
  
  if(final > sum) {
    var diff = final - sum
    var profitpercent =( diff/ sum )* 100
    output.innerHTML= ("Your Profit Percent is " + profitpercent.toFixed(2) + " % and Profit is " + diff)
  }
  else if(sum > final)
  {
    var diff = sum - final
    var losspercent = (diff/sum)*100
    output.innerHTML= ("Your Loss Percent is " + losspercent.toFixed(2) +  "% and Loss is " + diff)
  }
  else
  {
    output.innerHTML= ("No profit no loss")
  }
}