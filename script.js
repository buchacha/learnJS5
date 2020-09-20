function User(name) {
  
  this.name = name;
  this.isAdmin = false;

  this.sayHi = function() { alert(this.name); };
}

let user = new User("Вася");

alert(user.name); // Вася
alert(user.isAdmin); // false
user.sayHi();