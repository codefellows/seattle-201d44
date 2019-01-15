'use strict';

var tanner = {
  course: '201d44',
  enrolled: true,
  instructors: 'Sam',
  first: 'Tanner',
  lastName: 'Percival',
  preferredName: 'Tan-Man',
  homeTown: 'Tacoma',
  introduction: function () {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ', but you can call me ' + this.preferredName + '. I am from ' + this.homeTown + '.';
  }
};

// We would need 228 lines of code to model the entire class in objects

// Constructor function syntax

// function ConstructorFunctionName (parameter1, parameter2) {
//   this.property = parameter1;
//   this.property2 = parameter2;
//   this.staticProperty1 = 'ExampleString';
//   this.method1 = function () {
//     console.log('do stuff');
//   };
// }

//====================
// Student Constructor
//====================

var allStudents = [];

function Student(firstName, lastName, preferredName, homeTown) {
  this.course = '201d44';
  this.enrolled = true;
  this.instructor = 'Sam';
  this.firstName = firstName;
  this.lastName = lastName;
  this.preferredName = preferredName;
  this.homeTown = homeTown;
  allStudents.push(this);
}

Student.prototype.introduction = function () {
  return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ', but you can call me ' + this.preferredName + '. I am from ' + this.homeTown + '.';
};

// Constructor = 12
// Each instance = 1 * 19
// Total lines to model the entire class: 31

//==========================
//Student Prototype Property
//==========================

// new Student instances
