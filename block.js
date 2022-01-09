
const SHA256 = require('crypto-js/sha256');

class Block {

    constructor(body) {
        this.id = 0;
        this.nonce = 144444;
        this.body = body;
        this.hash = "";
    }

    generateHash() {
        let self = this;
        console.log(`[0] Block: ${JSON.stringify(self)}`);
        return new Promise((resolve) => {
            self.hash = SHA256(JSON.stringify(self));
            resolve(self);
        });
    }
}

module.exports.Block = Block;