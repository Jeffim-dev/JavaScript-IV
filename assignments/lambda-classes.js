// CODE here for your Lambda Classes
class Person {
    constructor(personAttr){
      this.name = personAttr.name;
      this.age = personAttr.age;
      this.location = personAttr.location;
     }
    sayHello() {
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
  }
  
  class Instructor extends Person {
    constructor (instructorAttrs){
      super(instructorAttrs);
      this.specialty = instructorAttrs.specialty
      this.favLanguage = instructorAttrs.favLanguage
      this.catchPhrase = instructorAttrs.catchPhrase
    }
    demo(subject) {
      return `Today we are learning about ${subject}`;
    };  
    grade(student, subject) {
      return `${student.name} receives a perfect score on ${subject}`;
    };
  }
  
   class Student extends Person {
    constructor (studentAttrs){
      super(studentAttrs);
      this.previousBackground = studentAttrs.previousBackground
      this.className = studentAttrs.className
      this.favSubjects = studentAttrs.favSubjects
    }
    listsSubjects() {
      return `${this.favSubjects}`;
    }; 
    PRAssignment(subject) {
       return `${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge(subject) {
      return `${this.name} has begun sprint challenge on ${subject}`;
    }; 
  }
  
  class TeamLead extends Instructor {
    constructor (teamLeadAttrs){
      super(teamLeadAttrs);
      this.gradClassName = teamLeadAttrs.gradClassName
      this.favInstructor = teamLeadAttrs.favInstructor
    }
    standUp(channel) {
       return `${this.name} announces to ${channel}, @channel standy times!`;
    };  
    debugsCode(student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}`;
    };
  }
  
  const ned = new Instructor({
      name: "Ned",
      location: "Philadelphia",
      age: 37,
      specialty: "FullStack",
      favLanguage: ["Javascript", "C++"],
      catchPhrase: "Don't give up"
  });
  
  const jen = new Student({
      name: "Jen",
      location: "San Diego",
      age: 35,
      previousBackground: "small business",
      className: "WebPT11",
      favSubjects: ["Javascript", "Python"]
   });
  
  const shawn = new TeamLead({
      name: "Shawn",
      location: "Toledo",
      age: 58,
      gradClassName: "WebPT11",
      favInstructor: "ned"
  });
  
  
  console.log(ned.sayHello());
  console.log(ned.demo(ned.favLanguage[1]));
  console.log(ned.grade(jen, jen.favSubjects[0]));
  console.log(jen.listsSubjects());
  console.log(jen.PRAssignment(ned.favLanguage[1]));
  console.log(jen.sprintChallenge(ned.favLanguage[1]));
  console.log(shawn.standUp(shawn.gradClassName));
  console.log(shawn.debugsCode(jen, ned.favLanguage[1]));