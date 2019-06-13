// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
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
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
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
        // a method that logs out all of the student's favoriteSubjects one by one.
    }
    PRAssignment(subject) {
        // a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
    }
    sprintChallenge(subject) {
        // similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
    }
}

class ProjectManager extends Instructor {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel) {
        // a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
    }
    debugsCode(student, subject) {
        // a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
    }
}