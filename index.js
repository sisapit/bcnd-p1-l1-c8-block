
const BlockClass = require('./block.js');
const block = new BlockClass.Block("Test Block");

block.generateHash().then(result => {
    console.log(`[1] Block Hash: ${result.hash}`);
    console.log(`[2] Block: ${JSON.stringify(result)}`);
}).catch((error) => { console.log(error) });

