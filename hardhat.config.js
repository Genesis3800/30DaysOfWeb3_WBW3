//My contract address as of now
//https://mumbai.polygonscan.com/address/0xFbf777B8cc6C5cac050EC5e8ab9e2a2c06A0F32F#code

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: process.env.STAGING_INFURA_URL,
      accounts: [process.env.STAGING_PRIVATE_KEY],
    },
  },
};