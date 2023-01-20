import DraftLog from "draftlog";
import chalk from "chalk";
import chalkTable from 'chalk-table';
import readline from 'readline';

import database from './../database.json' assert { type: 'json'};
import Person from "./person.js";

DraftLog(console).addLineListener(process.stdin);
Person
const options = {
    leftPad: 2,
    columns: [
        { field: "id", name: chalk.cyan("ID")},
        { field: "vehicles", name: chalk.cyan("VEHICLES")},
        { field: "kmTraveled", name: chalk.cyan("KMTRAVELLED")},
        { field: "from", name: chalk.cyan("FROM")},
        { field: "to", name: chalk.cyan("TO")},
    ]
}

const table = chalkTable(options, database.map(item => new Person(item).formatted()));
const print = console.draft(table);