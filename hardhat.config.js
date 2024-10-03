const  HardhatUserConfig  =  require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");
dotenv.config();

const config = {
  solidity: {
    version: "0.8.20",
    settings: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
},
  networks: {
    // for testnet
    "lisk-sepolia": {
      url: process.env.LISK_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    // Use "123" as a placeholder, because Blockscout doesn't need a real API key, and Hardhat will complain if this property isn't set.
    apiKey: {
      "lisk-sepolia": "123",
    },
    customChains: [
      {
        network: "lisk-sepolia",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com/",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};

module.exports = config;



