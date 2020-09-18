me = { name: 'Egor', age: 17};

studentMe = Object.create(Object.getPrototypeOf(me));

studentMe.course = 4;
studentMe.university = {name: 'SPbU', place: 'Russia'};

let clone = Object.create(Object.getPrototypeOf(studentMe), Object.getOwnPropertyDescriptors(studentMe));

clone.university.place = 'Germany ?';
alert(clone.university.place); //Germany ?
alert(studentMe.university.place); //Germany ?

