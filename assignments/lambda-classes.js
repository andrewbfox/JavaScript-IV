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
    changeGrade(student) {
        student.studentGrade += (Math.floor((Math.random() * 20) + 1) - 10);
        if (student.studentGrade > 100) {
            student.studentGrade = 100;
        } else if (student.studentGrade < 0) {
            student.studentGrade = 0;
        }
        return student.studentGrade;
    }
}

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
        this.studentGrade = Math.floor((Math.random() * 100) + 1);
    }
    listsSubjects() {
        return this.favSubjects.toString();
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

  // Testing the code
/*
  console.log(andy);
  console.log(rob);
  console.log(fred);
  console.log(pebbles);
  console.log(abigail);
  console.log(beulah);
  console.log(clara);
  console.log(rudolph);

console.log(andy.speak());
console.log(fred.speak());
console.log(abigail.speak());
console.log(clara.speak());

console.log(pebbles.demo('JavaScript'));
console.log(rudolph.grade(abigail, 'CSS'));

console.log(abigail.listsSubjects());
console.log(abigail.PRAssignment('React'));
console.log(abigail.sprintChallenge('HTML'));

console.log(rudolph.standUp("WEB21_Rudolph"));
console.log(rudolph.debugsCode(beulah, "BASIC"));
console.log(clara.demo('Forth'));
console.log(rudolph.grade(beulah, 'COBOL'));

console.log(`Andy's age is ${andy.age}`);
console.log(`Fred's favorite language is ${fred.favLanguage}, and his specialty is ${fred.specialty}`)
console.log(`Pebbles's catchphrase is ${pebbles.catchPhrase}`)
console.log(`Abigail's background is ${abigail.previousBackground}`)
console.log(`Beulah's favorite subjects are ${beulah.favSubjects}`)
console.log(`Clara's favorite language is ${clara.favLanguage}, her specialty is ${clara.specialty}, and her catchphrase is ${clara.catchPhrase}`)
console.log(`Rudolph's graduating class was ${rudolph.gradClassName}, and his favorite instructor is ${rudolph.favInstructor}`)
*/
console.log(abigail.studentGrade);
console.log(beulah.studentGrade);

console.log(fred.changeGrade(abigail));
console.log(pebbles.changeGrade(beulah));

console.log(abigail.studentGrade);
console.log(beulah.studentGrade);
