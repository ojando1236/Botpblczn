const chalk = require("chalk");

module.exports = {
  name: "disconnected",
  execute() {
    console.log(
      chalk.green("[DataBase] ") +
        chalk.yellow("Rozłączono z bazą danych!"),
    );
  },
};
