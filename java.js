let counter = 0


document.getElementById('increaseButton').onclick = function() {
    counter+=1;
    document.getElementById('monitor').innerHTML = counter;
}
document.getElementById('decreaseButton').onclick = function() {
    counter-=1;
    document.getElementById('monitor').innerHTML = counter;
}


