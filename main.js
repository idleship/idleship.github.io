i=0;
function increase()
{
  i++;
  document.getElementById("increase").innerHTML=i;
  return true;
}
var totalClicks = 0;

var clickIncrement = 1;

var autoClicker = {
    amount: 0,
    cost: 0,
    increment: 1
};

var tick = 1000;

/* Run the AutoClicker */
var runAutoClicker = setInterval(function () {
    totalClicks = totalClicks + (autoClicker.increment * autoClicker.amount);
    document.getElementById("total_clicks").innerHTML = totalClicks;
}, tick)

/* Buy AutoClickers */
$('#autoClickerBuy').click(function () {
    if (totalClicks >= 10) {
        totalClicks = totalClicks - 10;
        autoClicker.amount++;
        document.getElementById("autoClickers").innerHTML = autoClicker.amount;
    }
});

/* Click to Increment */
$('#click').click(function () {
    totalClicks = totalClicks + clickIncrement;
    document.getElementById("total_clicks").innerHTML = totalClicks;
});
