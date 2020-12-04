const HW=require('./hw.json');
//All topping types is
const Topping=HW[0].topping;
function toppingType (){
console.log('All topping types is');
for(let i=0;i<Topping.length;i++){
console.log(Topping[i].type);   
}}
toppingType();
console.log('*************************');

//All batter types is
const batter=HW[0].batters.batter;
function batterType(){
console.log('All batter types is');
for(let i=0;i<batter.length;i++){
console.log(batter[i].type);   
}}
batterType();
console.log('*************************');

//. Ppu average 
var sum=0;
var j;
for(j=0;j<HW.length;j++){
    sum=sum+HW[j].ppu;
}
var avarage=sum/j;
console.log('The Ppu average  is '+avarage);
console.log('*************************');
//Ppu sum
console.log('the Ppu sum is '+sum);
console.log('*************************');


//List of all mentioned IDs regardless to the type
console.log("List of all mentioned IDs ");
for  (let i=0;i<HW.length;i++){
    console.log(HW[i].id);}
    for(let i=0;i<Topping.length;i++){
console.log(Topping[i].id);   
}
 for(let i=0;i<batter.length;i++){
console.log(batter[i].id);   
}   
console.log('*************************');

