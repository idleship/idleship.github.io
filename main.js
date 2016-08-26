i=0;
function increase()
{
  i++;
  document.getElementById("increase").innerHTML=i;
  return true;
}

var Building1Name = "Planet Miner";
var Building1Cost = 25;
var Building1PerSec = 1;
var Building1Qty = 0;

function Tick() {
	increase = increase + (Building1Qty * Building1PerSec);
	document.getElementById("increase").innerHTML = increase;
}

function BuyLemonadeStand() {
	if (increase >= Building1Cost) {
		increase = money - Building1Cost;
		Building1Qty = Building1Qty + 1;
		document.getElementById("increase").innerHTML = increase;
		document.getElementById("Building1Qty").innerHTML = Building1Qty;
	}
}
