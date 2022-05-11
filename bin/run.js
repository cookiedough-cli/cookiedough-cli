#!/usr/bin/node
const { exec } = require('child_process');
let cond = false;
(function() {
    var P = ["\\", "|", "/", "-"];
    var x = 0;
    if(!cond) return setInterval(function() {
      process.stdout.write("\r" + P[x++]);
      x &= 3;
    }, 250);
  })();

exec('where python', (err, _, stderr) => {
    if(err || stderr) {
        throw err || stderr;
    }
    cond = true;
});

setTimeout(() => {
    if(cond) {
        console.log('placeholder: build process start');
        process.exit(0);
    }
}, 1000);