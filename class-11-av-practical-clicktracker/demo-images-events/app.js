'use strict';

//global variables
var allGoats = [];
var goatpic = document.getElementById('goatpic');

function GoatPic(name) {
  // images/sassy-goat.jpg
  this.filepath = `images/${name}.jpg`;
  this.name = name;
  this.views = 0;
  allGoats.push(this);
}

new GoatPic('sassy-goat');

function showRandomGoat() {
  goatpic.src = allGoats[0].filepath;
  goatpic.alt = allGoats[0].name;
  goatpic.title = allGoats[0].name;
  allGoats[0].views++;
}
