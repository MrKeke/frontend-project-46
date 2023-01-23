import { program } from 'commander';
import cli from './cli/cli.js';

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action(cli)
  .parse(process.argv);
