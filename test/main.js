const { spawn, spawnSync } = require('child_process')
const rimraf = require('rimraf')
const Mocha = require('mocha')
const mocha = new Mocha({
    ui: 'bdd'
});

rimraf.sync('./.nyc_output')
rimraf.sync('./coverage')

mocha.addFile("./test/index.js");
jsonServer = spawn('node', ['./test/server.js']);
jsonServer.stdout.on('data', (res) => {
    if (res.toString('utf8').indexOf("JSON Server is Ready") == 0) {
        mocha.run(function () {
            jsonServer.kill();
        })
    }
})


