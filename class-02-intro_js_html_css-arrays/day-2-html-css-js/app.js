var kids = prompt('how many kids do you have?');
console.log('number of kids:', kids);

var guitars = prompt('how many guitars do you have?');
console.log('number of guitars:', guitars);

if (kids === '3' || kids === '4') {
  alert('yeah, you are correct.  too many kids');
}

if (parseInt(kids) === 3 && parseInt(guitars) === 3) {
  alert('yeah you are right');
} else {
  alert('you are wrong');
}