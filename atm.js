import chalk from "chalk";
import inquirer from "inquirer";
// Customer name is Muhammad Omar Sheikh and his account type is Current Account. 
// Account pin is 1020.
const balance = 200000;
console.log(chalk.bold.blue("Welcome, Muhammad Omar Sheikh!"));
let enterPin = (await inquirer.prompt([
    {
        message: "Please enter your pin",
        type: "number",
        name: "pin"
    }
]));
if (enterPin.pin === 1020) {
    let accType = await inquirer.prompt([
        {
            message: "Select your account type",
            type: "rawlist",
            name: "accountType",
            choices: ["Current Account", "Saving Account", "Digital Account"]
        }
    ]);
    if (accType.accountType === "Current Account") {
        let answer = await inquirer.prompt({
            message: "Select an option",
            type: "rawlist",
            name: "options",
            choices: ["Balance check", "Cash Withdraw"]
        });
        if (answer.options === "Balance check") {
            console.log("Your current account balance is " + chalk.bold("PKR ") + chalk.bold(balance));
        }
        if (answer.options === "Cash Withdraw") {
            let cash = await inquirer.prompt({
                message: "Please enter amount to withdraw",
                type: "number",
                name: "cashAmount"
            });
            if (cash.cashAmount > 200000) {
                console.log(chalk.bold.redBright("Insufficient Balance!"));
            }
            else {
                let remaining = balance - cash.cashAmount;
                console.log("Withdrawal Amount: PKR " + cash.cashAmount);
                console.log("Remaining balance: PKR " + remaining);
                console.log(chalk.bold.blueBright("Thank you for using this ATM!"));
            }
        }
    }
    else {
        console.log(chalk.redBright("Incorrect Account Type!"));
    }
}
else {
    console.log(chalk.redBright("Your pin is incorrect!"));
}
