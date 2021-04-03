const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findOneAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true },
    (workout) => {
      res.json(workout);
    }
  ).catch((err) => {
    res.json(err);
  });
});

router.get("/api/workouts/range", ({ body }, res) => {
  db.Workout.find({ body })
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
