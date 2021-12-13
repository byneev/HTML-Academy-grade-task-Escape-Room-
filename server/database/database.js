const quests = require('./quests/quests.json');

const initDatabase = () => ({
  quests,
});

module.exports = {
  initDatabase,
};
