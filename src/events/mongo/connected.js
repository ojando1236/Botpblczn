const chalk = require("chalk");

module.exports = {
  name: "connected",
  execute() {
    console.log(
      chalk.greenBright("[DataBase] ") +
        chalk.green("Połączono z bazą danych!"),
    );
  },
};
