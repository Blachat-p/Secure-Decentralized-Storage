const { create } = require('ipfs-http-client');

// Create an IPFS instance
const ipfs = create({
  host: 'localhost',   // You can replace this with 'localhost' if using local IPFS node
  port: 5001,
  protocol: 'http'         // Change to 'http' if using a local node
});

export default ipfs;
