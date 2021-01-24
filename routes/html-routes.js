const path = require('path');

module.exports = function (app) {
  app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/exercise', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

  app.get('/stats', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });
};
