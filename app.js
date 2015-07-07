var blessed = require('blessed');

// Create a screen object.
var screen = blessed.screen();

// Create a box perfectly centered horizontally and vertically.
var boxOne = blessed.box({
  top: 0,
  left: 0,
  width: '50%',
  height: '50%',
  content: 'Hello {bold}world{/bold}!',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 100,
    border: {
      fg: '#ffffff'
    },
    hover: {
      bg: 'green'
    }
  }
});

var boxTwo = blessed.box({
  top: 0,
  left: '50%',
  width: '50%',
  height: '50%',
  content: 'Hello {bold}world{/bold}!',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 6,
    border: {
      fg: '#ffffff'
    },
    hover: {
      bg: 'green'
    }
  }
});

var boxThree = blessed.box({
  top: '50%',
  left: 0,
  width: '50%',
  height: '50%',
  content: 'Hello {bold}world{/bold}!',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 1,
    border: {
      fg: '#ffffff'
    },
    hover: {
      bg: 'green'
    }
  }
});

// Append our box to the screen.
screen.append(boxOne);
screen.append(boxTwo);
screen.append(boxThree);

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
boxOne.focus();

// Render the screen.
screen.render();
