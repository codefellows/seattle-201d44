'use strict';

var tanner = {
  course: '201d44',
  enrolled: true,
  instructors: 'Sam',
  first: 'Tanner',
  lastName: 'Percival',
  preferredName: 'Tan-Man',
  homeTown: '?',
  introduction: function () {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ', but you can call me ' + this.preferredName + '. I am from ' + this.homeTown + '.';
  }
};

// Constructor function syntax

// function ConstructorFunctionName (parameter1, parameter2) {
//   this.property = parameter1;
//   this.property2 = parameter2;
//   this.staticPropety1 = 'ExampleString';
//   this.method1 = function () {
//     console.log('do stuff');
//   };
// }

//====================
// Student Constructor
//====================


//==========================
//Student Prototype Property
//==========================

// new Student instances
