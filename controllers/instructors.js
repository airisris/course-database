// instruction: import the book model
const Instructor = require("../models/instructor");

async function getInstructors() {
  // get all instructors
  return await Instructor.find();
}

async function getInstructor(id) {
  // get instructor by id
  return await Instructor.findById(id);
}

async function addInstructor(name, qualification, profile, coursesTaught) {
  // create new instructor
  const newInstructor = new Instructor({
    name,
    qualification,
    profile,
    coursesTaught,
  });
  // save the new instructor into MongoDB
  await newInstructor.save(); // clicking the save button
  return newInstructor;
}

async function updateInstructor(
  id,
  name,
  qualification,
  profile,
  coursesTaught
) {
  // update instructor
  return await Instructor.findByIdAndUpdate(
    id,
    {
      name,
      qualification,
      profile,
      coursesTaught,
    },
    {
      new: true,
    }
  );
}

async function deleteInstructor(id) {
  // delete instructor
  return await Instructor.findByIdAndDelete(id);
}

module.exports = {
  getInstructors,
  getInstructor,
  addInstructor,
  updateInstructor,
  deleteInstructor,
};
