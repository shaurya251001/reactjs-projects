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
const me = new Person("Shaurya", 18);
const me1 = new Person();
console.log(me.getDescription());
console.log(me1.getDescription());
