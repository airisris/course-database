// instruction: import the course model
const Course = require("../models/course");

async function getCourses() {
  // get all courses
  return await Course.find().populate("instructor");
}

async function getCourse(id) {
  // get course by id
  return await Course.findById(id).populate("instructor");
}

async function addCourse(
  title,
  instructor,
  startDate,
  endDate,
  subject,
  description,
  enrollmentCount
) {
  // create new course
  const newCourse = new Course({
    title,
    instructor,
    startDate,
    endDate,
    subject,
    description,
    enrollmentCount,
  });
  // save the new course into MongoDB
  await newCourse.save(); // clicking the save button
  return newCourse;
}

async function updateCourse(
  id,
  title,
  instructor,
  startDate,
  endDate,
  subject,
  description,
  enrollmentCount
) {
  // update course
  return await Course.findByIdAndUpdate(
    id,
    {
      title,
      instructor,
      startDate,
      endDate,
      subject,
      description,
      enrollmentCount,
    },
    {
      new: true,
    }
  );
}

async function deleteCourse(id) {
  // delete course
  return await Course.findByIdAndDelete(id);
}

module.exports = {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
