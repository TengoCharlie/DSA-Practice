const { exec } = require('child_process');

// Get additional arguments passed to the script
const args = process.argv.slice(2);
const report = args.includes('report'); // Check if 'report' is an argument

// Remove 'report' from args if present
const filteredArgs = args.filter(arg => arg !== 'report');

if (filteredArgs.length < 2) {
    console.error('Usage: node runJest.js <directory> <subdirectory> [report]');
    process.exit(1);
}

// Construct the path pattern from arguments
const pathPattern = `src/${filteredArgs[0]}*/${filteredArgs[1]}*/*.test.js`;

// Prepare Jest command based on whether 'report' was included
const jestOptions = report
    ? '--coverage --reporters=default --coverageReporters=html'
    : '--coverage=false --reporters=default';

const jestCommand = `jest ${pathPattern} ${jestOptions}`;
console.log(`Running: ${jestCommand}`);
exec(jestCommand, { shell: true }, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});