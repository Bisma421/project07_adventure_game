#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.greenBright("\n\tWelcome to the game\n"));

class player{
    name: string;
    fule: number = 100;
    constructor(name:string){
        this.name = name;
    }

    decreaseFule(){
        let fule = this.fule -25;
        this.fule = fule;
    }

    increseFule(){
        this.fule = 100
    }
}

class opponent{
    name: string;
    fule: number = 100;
    constructor(name:string){
        this.name = name;
    }
    decreaseFule(){
        let fule = this.fule -25;
        this.fule = fule;
    }
}

let player1 = await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message: chalk.gray("Enter your name:")
    }
])

let opponent1 = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message: chalk.gray("select your opponent:"),
        choices: ["Skeleton", "Zombie","Alien"]
    }
])

let p1 = new player(player1.name);
let o1 = new opponent(opponent1.select);

do{
    // Skeleton
    if (opponent1.select === "Skeleton"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"Choose your option:",
                choices: [chalk.magenta("Attack"), chalk.greenBright("Heal portion"), chalk.redBright("Run for your life...")]
            }
        ])
        if (ask.opt == chalk.magenta("Attack")){
            let num = Math.floor(Math.random() * 2);
            if (num > 0){
                p1.decreaseFule();
                console.log(`\n${p1.name} Fule is ${p1.fule}`);
                console.log(`${o1.name} Fule is ${o1.fule}\n`);
                if (p1.fule <= 0){
                    console.log(chalk.red("You Loose, Better luck next time...\n"));
                    process.exit()
                }
            }
            if (num <= 0){
                o1.decreaseFule();
                console.log(`\n${p1.name} Fule is ${p1.fule}`);
                console.log(`${o1.name} Fule is ${o1.fule}\n`);
                if (o1.fule <= 0){
                    console.log(chalk.green("You Win..."));
                    process.exit()
                }
            }
        }

        if (ask.opt === chalk.greenBright("Heal portion")) {
            p1.increseFule();
            console.log(`\nYou drink heal portion Your fule is ${p1.fule}\n`);  
        }

        if (ask.opt === chalk.redBright("Run for your life...")) {
            console.log(chalk.red("\nYou Loose, Better luck next time...\n"));
            process.exit()
        }

    }

    // Zombie
    if (opponent1.select === "Zombie"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"Choose your option:",
                choices: [chalk.magenta("Attack"), chalk.greenBright("Heal portion"), chalk.redBright("Run for your life...")]
            }
        ])
        if (ask.opt == chalk.magenta("Attack")){
            let num = Math.floor(Math.random() * 2);
            if (num > 0){
                p1.decreaseFule();
                console.log(`\n${p1.name} Fule is ${p1.fule}`);
                console.log(`${o1.name} Fule is ${o1.fule}\n`);
                if (p1.fule <= 0){
                    console.log(chalk.red("You Loose, Better luck next time...\n"));
                    process.exit()
                }
            }
            if (num <= 0){
                o1.decreaseFule();
                console.log(`\n${p1.name} Fule is ${p1.fule}`);
                console.log(`${o1.name} Fule is ${o1.fule}\n`);
                if (o1.fule <= 0){
                    console.log(chalk.green("You Win..."));
                    process.exit()
                }
            }
        }

        if (ask.opt === chalk.greenBright("Heal portion")) {
            p1.increseFule();
            console.log(`\nYou drink heal portion Your fule is ${p1.fule}`);  
        }

        if (ask.opt === chalk.redBright("Run for your life...")) {
            console.log(chalk.red("\nYou Loose, Better luck next time...\n"));
            process.exit()
        }

    }

    // Alien
    if (opponent1.select === "Alien"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"Choose your option:",
                choices: [chalk.magenta("Attack"), chalk.greenBright("Heal portion"), chalk.redBright("Run for your life...")]
            }
        ])
        if (ask.opt == chalk.magenta("Attack")){
            let num = Math.floor(Math.random() * 2);
            if (num > 0){
                p1.decreaseFule();
                console.log(`\n${p1.name} Fule is ${p1.fule}`);
                console.log(`${o1.name} Fule is ${o1.fule}\n`);
                if (p1.fule <= 0){
                    console.log(chalk.red("You Loose, Better luck next time...\n"));
                    process.exit()
                }
            }
            if (num <= 0){
                o1.decreaseFule();
                console.log(`\n${p1.name} Fule is ${p1.fule}`);
                console.log(`${o1.name} Fule is ${o1.fule}\n`);
                if (o1.fule <= 0){
                    console.log(chalk.green("You Win..."));
                    process.exit()
                }
            }
        }

        if (ask.opt === chalk.greenBright("Heal portion")) {
            p1.increseFule();
            console.log(`\nYou drink heal portion Your fule is ${p1.fule}`);  
        }

        if (ask.opt === chalk.redBright("Run for your life...")) {
            console.log(chalk.red("\nYou Loose, Better luck next time...\n"));
            process.exit()
        }
    }
}


while(true)
