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

class infoCourseUsers {
  constructor(courseCode, courseTitle, courseCredits, marksReceived) {
    this.courseCode = courseCode;
    this.courseTitle = courseTitle;
    this.courseCredits = courseCredits;
    this.marksReceived = marksReceived;
  }
}

let infoP = infoPersonalUser;
let infoC = infoCourseUser;

function askDetails() {
  let CourseID;

  askPersonalInfo();

  if (infoP.noOfCourses) {
    let infoReceived;
    for (let i = 0; i < infoP.noOfCourses; i++) {
      infoReceived = askCourseInfo();
      courseDetails[i] = new infoCourseUser(...infoReceived);
    }
  }

  //   CourseID = checkCourse(infoP.courseID);

  //   if (CourseID) {
  //     searchDatabase(
  //       infoP.studentFirstName,
  //       infoP.studentLastName,
  //       infoP.studentID,
  //       infoP.noOfCourses
  //     );
  //   }
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
  infoC.courseCode = prompt("Enter Course Code:");
  infoC.courseTitle = prompt("Enter Course Title:");
  infoC.courseCredits = prompt("Enter Number of Course Credits:");
  infoC.marksReceived = prompt("Enter Mark received in course:");

  return arrayForStoringInfo[
    (infoC.courseCode,
    infoC.courseTitle,
    infoC.courseCredits,
    infoC.marksReceived)
  ];
}

// function searchDatabase(ID, firstName, lastName, Courses, index) {
//   console.log(index);
//   const infoRegardingCourse = DATABASE.courseTitle[index];
//   console.log(infoRegardingCourse);
// }

// function checkCourse(courseID) {
//   let includesCourseID;
//   do {
//     if (DATABASE.courseCode.includes(courseID)) {
//       console.log("It includes");
//       includesCourseID = true;
//       indexForCourse = checkIndex(courseID);
//       return indexForCourse;
//     } else {
//       includesCourseID = false;
//       courseID = prompt("please enter course id:");
//     }
//   } while (includesCourseID !== true);
// }

// function checkIndex(courseCode) {
//   return DATABASE.courseCode.indexOf(courseCode);
// }

askDetails();
