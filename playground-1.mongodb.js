// Create a new database.
use("mockpa");

// Create a new collection.
db.createCollection("instructors");

db.instructors.insertMany([
  {
    _id: "5f8d0dc1134b541c7844fc3b",

    name: "Dr. Smith",

    qualification: "PhD in Physics",

    profile: "A renowned physicist with 10 years of teaching experience.",

    coursesTaught: 5,
  },

  {
    _id: "5f8d0dc1145b541c7844fc3c",

    name: "Jane Doe",

    qualification: "MSc in Computer Science",

    profile: "A passionate web developer and instructor.",

    coursesTaught: 3,
  },
]);
