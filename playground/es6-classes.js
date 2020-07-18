class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name; //this in classes reders to the class's instance
    this.age = age;
  }
  getGreeting() {
    return "Hi " + this.name;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}
class Student extends Person {
  constructor(name, age, major) {
    super(name, age); //the parent constructor is called
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += " Their major is " + this.major;
    }
    return description;
  }
}
class Traveller extends Person {
  constructor(name, age, homeloc) {
    super(name, age);
    this.homeloc = homeloc;
  }
  getGreeting() {
    let getGreeting = super.getGreeting();
    if (this.homeloc) {
      getGreeting += ` Their home location is ${this.homeloc}`;
    }
    return getGreeting;
  }
}
const me = new Traveller("Shaurya", 18, "JBL");
const me1 = new Student();
console.log(me.getGreeting());
console.log(me1.getDescription());
