const express = require("express");
const router = express.Router();

// instruction: import the book model
const Instructor = require("../models/instructor");

// instruction: GET /: List all instructors
router.get("/", async (req, res) => {
  try {
    res.status(200).send(await Instructor.find());
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Unknown error" });
  }
});

// instruction: setup GET /:id: Get a specific instructor  by its _id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    res.status(200).send(await Instructor.findById(id));
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Unknown error" });
  }
});

// instruction: setup POST /: Add a new instructor
router.post("/", async (req, res) => {
  try {
    const name = req.body.name;
    const qualification = req.body.qualification;
    const profile = req.body.profile;
    const coursesTaught = req.body.coursesTaught;

    // error checking
    if (!name) {
      return res.status(400).send({
        message: "All the fields are required",
      });
    }

    res.status(200).send(
      await new Instructor({
        name,
        qualification,
        profile,
        coursesTaught,
      }).save() // clicking the save button
    );
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Unknown error" });
  }
});

// instruction: setup PUT /:id: Update a instructor by its _id
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body.name;
    const qualification = req.body.qualification;
    const profile = req.body.profile;
    const coursesTaught = req.body.coursesTaught;

    // error checking
    if (!name) {
      return res.status(400).send({
        message: "All the fields are required",
      });
    }

    res.status(200).send(
      await Instructor.findByIdAndUpdate(
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
      )
    );
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Unknown error" });
  }
});

// instruction: setup DELETE /:id: Delete a instructor by its _id
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Instructor.findByIdAndDelete(id);

    res.status(200).send({
      message: `Instructor with the ID of ${id} has been deleted`,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Unknown error" });
  }
});

// instruction: export the router
module.exports = router;
