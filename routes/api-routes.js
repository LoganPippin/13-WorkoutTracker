const db = require('../models');
const mongojs = require('mongojs');

module.exports = function (app) {
  app.get('/api/workouts', (req, res) => {
    db.Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });

  app.put('/api/workouts/:id', (req, res) => {
    console.log(req);
    db.Workout.updateOne(
      { _id: mongojs.ObjectId(req.params.id) },
      { $push: { exercises: req.body } }
    )
      .then((data) => {
        console.log(data);

        res.json(data);
      })
      .catch((err) => {
        res.status(400).error(err);
      });
  });

  app.get('/api/workouts/range', (req, res) => {
    let dayOfWeek = new Date().getDay();
    let lastSunday = new Date();
    lastSunday.setDate(new Date().getDate() - dayOfWeek);
    lastSunday.setHours(0, 0, 0);

    db.Workout.find({ day: { $gte: lastSunday } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.post('/api/workouts', (req, res) => {
    db.Workout.create({}).then((newWorkout) => {
      res.json(newWorkout);
    });
  });
};
