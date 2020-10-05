//MAKING OBJECT FOR STORING FAKE DATA
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

//MAKING OBJECT DATA TYPE, SO THAT I CAN PASS BY REFERENCE
let infoPersonalUser = {
  studentFirstName: "",
  studentLastName: "",
  studentID: "",
  noOfCourses: "",
};

//MAKING OBJECT DATA TYPE RELATED TO COURSE INFO ONLY
let infoCourseUser = {
  courseCode: "",
  courseTitle: "",
  courseCredits: "",
  marksReceived: "",
};

//SETTING OBJECTS TO SMALLER NAME FOR EASE
let infoC = infoCourseUser;
let infoP = infoPersonalUser;

//CREATING CLASSES FOR MAKING INSTANCES
class infoCourseUsers {
  constructor(courseCode, courseTitle, courseCredits, marksReceived) {
    this.courseCode = courseCode;
    this.courseTitle = courseTitle;
    this.courseCredits = courseCredits;
    this.marksReceived = marksReceived;
  }
}

//CREATING IIFI FOR ASKDETAILS FUNCTION
(function askDetails() {
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
})();

//AKSING PERSONAL INFO AND STORING TO OBJECT INFOP
function askPersonalInfo() {
  infoP.studentFirstName = prompt("Enter your First Name");
  infoP.studentLastName = prompt("Enter your Last Name");
  infoP.studentID = prompt("Enter your student ID number");
  infoP.noOfCourses = prompt(
    "Enter the number of courses you did in above semester"
  );
}

//ASKING COURSE INFO AND STORING TO OBJECT INFOC
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

//CHECKING IF COURSE EXISTS IN DATABASE USING INCLUDES INBUILT FUNCTION AND RETURNING TRUE OR FALSE
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

//SEARCHING DATABASE AND GETTING RELATED INFO TO THE COURSE ENTERED
function searchDatabase(index) {
  let infoRegardingCourse = [];

  const infoRegardingTitle = DATABASE.courseTitle[index];
  const infoRegardingCredits = DATABASE.courseCredit[index];

  infoRegardingCourse.push(infoRegardingTitle, infoRegardingCredits);

  return infoRegardingCourse;
}

//FINDING INDEX FOR THE COURSE IN DATABASE AS THE INDEX FOR THE RELATED INFO IS SAME AS COURSE CODE
function checkIndex(courseCode) {
  return DATABASE.courseCode.indexOf(courseCode);
}

//DISPLAYING ALL THE INFORMATION IN CONSOLE.
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

//CALCULATING GRADE AND GPA USING SWITCH AND STORING TO ARRAY
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

//CALCULATING GPA BY DIVIDING GPA POINTS BY TOTAL SUBJECTS
function calculateGPA(totalPoints, totalCredit) {
  return totalPoints / totalCredit;
}

//CALCULATE GPA POINTS FOR EACH SUBJECT AND THEN ADDING TOGETHER.
function totalCoursePoints(Marks) {
  let sumGPA = 0;

  for (let i = 0; i < infoP.noOfCourses; i++) {
    sumGPA += calculateGrade(Marks[i].marksReceived)[1];
  }

  return sumGPA;
}
