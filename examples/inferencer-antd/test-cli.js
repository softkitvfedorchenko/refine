#!/usr/bin/env node
import { Command } from "commander";
import { join } from 'path';

const bootstrap = () => {
    const program = new Command();
    console.log('1: ', 1);

    program
        .command('gen')
        .action((...args) => {
            //console.log('paramgs: ', args);

            const resourcePath = join(
                process.cwd(),
                "src/pages",
                "roles",
            );
            console.log('resourcePath: ', resourcePath);

            //if (options.debug) {
            //    console.error('Called %s with options %o', command.name(), options);
            //}
            //const title = options.title ? `${options.title} ` : '';
            //console.log(`Thank-you ${title}${name}`);
        });

    program.parse();
};

bootstrap();
