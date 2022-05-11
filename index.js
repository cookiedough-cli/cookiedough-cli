const { exec } = require('child_process');

// just a symlink to run the bin
exec('node bin/run.js', (err, stdout, _) => {
    if(err) {
        throw err;
    }
    process.stdout.write(stdout);
    process.stdout.write('\n');
});