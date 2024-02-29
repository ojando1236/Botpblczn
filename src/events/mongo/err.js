const chalk = require("chalk");

module.exports = {
  name: "err",
  execute() {
    console.log(
      chalk.green("[DataBase] ") +
        chalk.red.underline("Wystąpił błąd podczas łączenia z bazą danych!\n(${err})");
    );
  },
};
