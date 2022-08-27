class Person {
  constructor(name, age) {
    this.name = name 
    this.age = age
  }
  isAdult () {
    return this.age >= 18
  }
  get firstName() {
    return this.name.split(' ')[0]
  }
  set firstName(value) {
    const nameWords = this.name.split(' ')
    nameWords[0] = value
    this.name = nameWords.join(' ')
  }
}

let p1 = new Person('Krishna Gole', 25)

