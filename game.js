import { select, confirm, input } from "@inquirer/prompts";
import chalk from "chalk";
async function playGame() {
    while (true) {
        // Get the user's name
        let name = await input({ message: chalk.blue("What is your name?") });
        if (name === undefined || name.trim() === "") {
            console.log(chalk.red("Please enter a name"));
            continue; // Prompt the user again if the name is invalid
        }
        else {
            console.log(chalk.green(`Hello, ${name}!`));
        }
        // Confirm if the user wants to play a game
        let constant = await confirm({ message: chalk.blue(`Dear ${name}, Do you want to play a game?`) });
        if (constant) {
            let secretnumber = Math.floor(Math.random() * 5) + 1;
            console.log("I've picked a number, now it's your turn");
            let choice = await select({
                message: chalk.blue("Please choose a number:"),
                choices: [
                    { name: "1", value: 1 },
                    { name: "2", value: 2 },
                    { name: "3", value: 3 },
                    { name: "4", value: 4 },
                    { name: "5", value: 5 },
                ]
            });
            if (secretnumber === choice) {
                console.log(chalk.yellowBright("You have chosen the correct number!"));
            }
            else {
                console.log(chalk.red(`You chose the wrong number. The correct number was ${secretnumber}.`));
            }
            console.log(chalk.green(`I have chosen "${secretnumber}".`));
        }
        else {
            console.log(chalk.red("It's your choice if you don't want to play a game!"));
        }
        // Ask if the user wants to play another round
        let restart = await confirm({ message: chalk.blue("Do you want to play another round?") });
        if (!restart) {
            console.log(chalk.green("Goodbye!"));
            break; // Exit the loop and end the program
        }
    }
}
playGame();
