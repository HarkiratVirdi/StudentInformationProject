const DATABASE = {
  courseCode: ["WEB222", "WEB322", "IPC244", "JAV745", "OOP244"],
  courseTitle: [
    "Web Programming Principles",
    "Web Programming Tools & Frameworks",
    "Introduction to Programming Using C",
    "Java Programming",
    "Introduction to Object Oriented Programming",
  ],
  courseCredit: [3, 3, 3, 3, 3],
};

let infoPersonalUser = {
  studentFirstName: "",
  studentLastName: "",
  studentID: "",
  noOfCourses: "",
};

let infoCourseUser = {
  courseCode: "",
  courseTitle: "",
  courseCredits: "",
  marksReceived: "",
};

let infoC = infoCourseUser;
let infoP = infoPersonalUser;

class infoCourseUsers {
  constructor(courseCode, courseTitle, courseCredits, marksReceived) {
    this.courseCode = courseCode;
    this.courseTitle = courseTitle;
    this.courseCredits = courseCredits;
    this.marksReceived = marksReceived;
  }
}

function askDetails() {
  askPersonalInfo();

  if (infoP.noOfCourses) {
    let infoReceived = [];
    courseDetails = new infoCourseUsers();
    for (let i = 0; i < infoP.noOfCourses; i++) {
      infoReceived = askCourseInfo();

      courseDetails[i] = new infoCourseUsers(
        infoReceived[0].courseCode,
        infoReceived[0].courseTitle,
        infoReceived[0].courseCredits,
        infoReceived[0].marksReceived
      );
    }
    displayInfo(courseDetails);
  }
}

function askPersonalInfo() {
  infoP.studentFirstName = prompt("Enter your First Name");
  infoP.studentLastName = prompt("Enter your Last Name");
  infoP.studentID = prompt("Enter your student ID number");
  infoP.noOfCourses = prompt(
    "Enter the number of courses you did in above semester"
  );
}

function askCourseInfo() {
  let arrayForStoringInfo = [];

  do {
    infoC.courseCode = prompt("Enter Course Code");
  } while (!checkCourse(infoC.courseCode));

  infoC.courseTitle = searchDatabase(checkIndex(infoC.courseCode))[0];
  infoC.courseCredits = searchDatabase(checkIndex(infoC.courseCode))[1];
  infoC.marksReceived = prompt("Enter Mark received in course:");

  arrayForStoringInfo.push(infoC);
  return arrayForStoringInfo;
}

function searchDatabase(index) {
  let infoRegardingCourse = [];

  const infoRegardingTitle = DATABASE.courseTitle[index];
  const infoRegardingCredits = DATABASE.courseCredit[index];

  infoRegardingCourse.push(infoRegardingTitle, infoRegardingCredits);

  return infoRegardingCourse;
}

function checkIndex(courseCode) {
  return DATABASE.courseCode.indexOf(courseCode);
}

function checkCourse(courseID) {
  let includesCourseID;
  if (DATABASE.courseCode.includes(courseID)) {
    includesCourseID = true;
    return includesCourseID;
  } else {
    includesCourseID = false;
    return includesCourseID;
  }
}

function displayInfo(details) {
  console.log("Thanks, displaying student transcript:");
  console.log("");
  console.log("STUDENT TRANSCRIPT");
  console.log("");
  console.log(infoP.studentFirstName, infoP.studentLastName);
  console.log(infoP.studentID);
  console.log("Semester Code:", Math.floor(Math.random() * 200000) + 10000);
  console.log("Semester:", Math.floor(Math.random() * 8) + 1);
  console.log("");

  for (let i = 0; i < infoP.noOfCourses; i++) {
    console.log("Course Code:", details[i].courseCode);
    console.log("Course Title:", details[i].courseTitle);
    console.log("Mark", details[i].marksReceived);
    console.log("Grade:", calculateGrade(details[i].marksReceived)[0]);
  }

  console.log("");
  console.log(
    "Student GPA:",
    calculateGPA(totalCoursePoints(details), infoP.noOfCourses)
  );
}

function totalCoursePoints(Marks) {
  let sumGPA = 0;

  for (let i = 0; i < infoP.noOfCourses; i++) {
    sumGPA += calculateGrade(Marks[i].marksReceived)[1];
  }

  return sumGPA;
}

function calculateGPA(totalPoints, totalCredit) {
  return totalPoints / totalCredit;
}

function calculateGrade(marks) {
  let gradeAndGPA = [];
  let grade = "";
  let gpa = 0;

  switch (true) {
    case marks >= 90:
      grade = "A";
      gpa = 4;
      break;

    case marks >= 80:
      grade = "B";
      gpa = 3;
      break;

    case marks >= 70:
      grade = "C";
      gpa = 2;
      break;

    case marks >= 60:
      grade = "D";
      gpa = 1;
      break;

    case marks < 60:
      grade = "F";
      gpa = 0;
      break;

    default:
      break;
  }

  gradeAndGPA.push(grade, gpa);
  return gradeAndGPA;
}

askDetails();
