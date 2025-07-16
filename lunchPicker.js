const lunches = [];
let x = "" ;
function addLunchToEnd(lunches,x) {
    lunches.push(x);
    console.log(x + " added to the end of the lunch menu.")
};

addLunchToEnd(lunches,"Tacos");

function addLunchToStart(lunches,y) {
    lunches.unshift(y);
    console.log(y + " added to the start of the menu")
};

addLunchToStart(lunches,"Sushi");

function removeLastLunch(lunches) {
    lunches.pop();
    console.log(removeLastLunch() + " removed from the end of the lunch menu.")
}