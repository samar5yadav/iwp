function func1(){
	confirm("you are submitting the details.. are you sure?");
}
function game(){
var i=0;
var j=document.getElementById("id2").value;
document.getElementById("gameid").innerHTML=j;
var k=1+Math.random()%5;
while(i<k){
i++;
document.getElementById("gameid").innerHTML="<img src="ylogo.png">";
}
if(i!=k){
document.getElementById("gameid1").innerHTML="wrong guess!!\n";
}
else{
document.getElementById("gameid2").innerHTML="you won\n!!\n";
}
}
