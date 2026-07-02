const course={
    courseName:"JavaScript",
    courseDuration:"3 months",
    courseFee:1000,
    courseInstructor:"John Doe"
}
// course.courseDuration="6 months";
const {courseDuration:Duration} =course;
console.log(Duration);