#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .version('0.0.1')
  .description('An application for pizzas ordering')
  .option('-p, --peppers', 'Add peppers')
  .option('-c, --cheese <type>', 'Add the specified type of cheese', 'marble')
  .option('-C, --no-cheese', 'You do not want any cheese');

program.parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbq) console.log('  - bbq');

const cheese = !program.cheese ? 'no' : program.cheese;

console.log('  - %s cheese', cheese);
console.log(program.args);
