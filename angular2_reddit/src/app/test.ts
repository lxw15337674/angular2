class Person {
  first_name: String;
  last_name: String;
  age: number;

  greet() {
    console.log('hello', this.first_name);
  }

  ageInYear(years: number): number {
    return this.age + years;
  }
}

var p: Person;
p = new Person();
p.first_name = 'lixiwang';
p.greet();
var p: person = new Person();
