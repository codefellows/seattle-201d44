'use strict';

// Object literal notation

// Let's model some Seattle beaches in code! Take a look at the HTML to see which ones. Were going to take the seagull data from that we store in JavaScript and render it into the DOM.

// Let's make note of the name, neighborhood, and seagull count of each beach for each day last week.

// Since we know we'll need days of the week, that is already set up for us.

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var alkiUl = document.getElementById('alkibeach');
var goldenUl = document.getElementById('gg');
var edmondsUl = document.getElementById('edmondsbeach');

var alki = {
  name: 'Alki',
  neighborhood: 'West Seattle',
  seagullCount: [212, 44, 34, 11, 18, 88, 377],
  render: function() {
    for (var i = 0; i < days.length; i++) {
      // 1. Create element to hold the data
      var liEl = document.createElement('li');
      // 2. Assign the data to the element
      liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls`;
      console.log('just assigned a value liEl', liEl);
      // 3. Put the element into the DOM
      alkiUl.appendChild(liEl);
    }
  }
};

var goldenGardens = {
  name: 'Golden Gardens',
  neighborhood: 'Ballard',
  seagullCount: [45, 233, 256, 122, 76, 45, 22],
  render: function () {
    for (var i = 0; i < days.length; i++) {
      // 1. Create element to hold the data
      var liEl = document.createElement('li');
      // 2. Assign the data to the element
      liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls`;
      console.log('just assigned a value liEl', liEl);
      // 3. Put the element into the DOM
      goldenUl.appendChild(liEl);
    }
  }
};

var edmonds = {
  name: 'Edmonds Beach',
  neighborhood: 'Edmonds',
  seagullCount: [88, 687, 89, 24, 56, 22, 65],
  render: function () {
    for (var i = 0; i < days.length; i++) {
      // 1. Create element to hold the data
      var liEl = document.createElement('li');
      // 2. Assign the data to the element
      liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls`;
      console.log('just assigned a value liEl', liEl);
      // 3. Put the element into the DOM
      edmondsUl.appendChild(liEl);
    }
  }
};

// alki.render();
// goldenGardens.render();
// edmonds.render();
