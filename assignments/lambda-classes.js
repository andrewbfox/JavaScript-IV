// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listsSubjects() {
        return this.favoriteSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// New Objects

const andy = new Person({
    name: "Andy",
    age: 53,
    location: "Watsontown",
})

const rob = new Person({
    name: "Rob",
    age: 52,
    location: "Bethlehem",
})

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const pebbles = new Instructor({
    age: 3,
    name: 'Pebbles',
    location: 'Bedrock',
    favLanguage: 'Ada',
    specialty: 'Data science',
    catchPhrase: 'Goo goo gaa gaa',
  });

  const abigail = new Student({
      name: "Abigail",
      age: 23,
      location: "New York",
      previousBackground: "Columbia University",
      className: "CS132",
      favSubjects: ['Html', 'CSS', 'JavaScript'],
  })

  const beulah = new Student({
      name: "Beulah",
      age: 21,
      location: "Buffalo",
      previousBackground: "Clemson",
      className: "WEB21",
      favSubjects: ['Python', 'Ada', 'Rexx'],
  })

  const clara = new ProjectManager({
      name: "Clara",
      age: 21,
      location: "London",
      favLanguage: 'Lisp',
      specialty: 'Data science',
      catchPhrase: 'Sic gorgiamus allos subjectatos nunc!',
      gradClassName: "WEB8",
      favInstructor: "Darren",
  })

  const rudolph = new ProjectManager({
      name: "Rudolph",
      age: 32,
      location: "Chicago",
      favLanguage: 'Python',
      specialty: 'Full stack',
      catchPhrase: 'Wherever you go, there you are',
      gradClassName: "CS1",
      favInstructor: "Sean",
  })