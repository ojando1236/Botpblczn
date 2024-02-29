const chalk = require("chalk");

module.exports = {
  name: "connecting",
  execute() {
    console.log(
      chalk.greenBright("[DataBase] ") +
        chalk.cyan("Łączenie z bazą danych..."),
    );
  },
};
