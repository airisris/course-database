const express = require("express");
const router = express.Router();

// instruction: import the course model
const Course = require("../models/course");

/* 
    instruction: 
    - setup GET /: List all courses (utilize populate() to bring in instructor details)
*/
router.get("/", async (req, res) => {
  try {
    res.status(200).send(await Course.find().populate("instructor"));
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Unknown error" });
  }
});

// instruction: setup GET /:id: Retrieve details of a specific course by its _id (use populate() for instructor details)
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    res.status(200).send(await Course.findById(id).populate("instructor"));
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Unknown error" });
  }
});

// instruction: setup POST /: Add a new course
router.post("/", async (req, res) => {
  try {
    const title = req.body.title;
    const instructor = req.body.instructor;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const subject = req.body.subject;
    const description = req.body.description;
    const enrollmentCount = req.body.enrollmentCount;

    // error checking
    if (!title || !instructor) {
      return res.status(400).send({
        message: "All the fields are required",
      });
    }

    res.status(200).send(
      await new Course({
        title,
        instructor,
        startDate,
        endDate,
        subject,
        description,
        enrollmentCount,
      }).save() // clicking the save button
    );
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Unknown error" });
  }
});

// instruction: setup PUT /:id: Modify details of a course by its _id
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const instructor = req.body.instructor;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const subject = req.body.subject;
    const description = req.body.description;
    const enrollmentCount = req.body.enrollmentCount;

    // error checking
    if (!title || !instructor) {
      return res.status(400).send({
        message: "All the fields are required",
      });
    }

    res.status(200).send(
      await Course.findByIdAndUpdate(
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
      )
    );
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Unknown error" });
  }
});

// instruction: setup DELETE /:id: Remove a course by its `_id`
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Course.findByIdAndDelete(id);

    res.status(200).send({
      message: `Course with the ID of ${id} has been deleted`,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Unknown error" });
  }
});

// instruction: export the router
module.exports = router;
