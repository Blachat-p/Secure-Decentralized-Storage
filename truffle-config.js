module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    Geth: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "1337",
    },
  },

  compilers: {
    solc: {
      version: "0.8.21",    // Specify the exact version of the Solidity compiler you need
    },
  },
};
