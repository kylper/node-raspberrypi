var blessed = require('blessed'),
contrib = require('blessed-contrib');

var screen = blessed.screen();
var grid = new contrib.grid({rows: 12, cols: 12, screen: screen});

/* Element Draw */

var header = grid.set(0, 3, 2, 6, contrib.lcd, {
  color: 'red',
  elements: 9
});

var time = grid.set(0, 0, 2, 3, contrib.lcd, {
  color: 'red',
  elements: 8
});


/* Element Content */
var date = new Date();
var theHour = date.getHours();
if (theHour < 10){
  theHour = "0" + theHour.toString();
} else {
  theHour = theHour.toString();
}
var theMinute = date.getMinutes().toString();
var theSecond = date.getSeconds().toString();

header.setDisplay('DASHBOARD');
time.setDisplay(theHour + '-' + theMinute + '-' + theSecond);


/*
var map = grid.set(0, 0, 4, 4, contrib.map, {label: 'World Map'});
var box = grid.set(4, 0, 4, 4, blessed.box, {label: 'My Box'});
var box1 = grid.set(8, 0, 4, 4, blessed.box, {label: 'My Box'});

var box2 = grid.set(0, 4, 4, 4, blessed.box, {label: 'My Box'});
var box3 = grid.set(4, 4, 4, 4, blessed.box, {label: 'My Box'});
var box4 = grid.set(8, 4, 4, 4, blessed.box, {label: 'My Box'});
*/



// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Render the screen.
screen.render();
