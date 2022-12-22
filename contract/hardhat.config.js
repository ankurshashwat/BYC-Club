require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/8-oZejh4UbdDPMNkZcXyhsNyrmeYQ645',
      accounts: ['3ee7141a4f953ad7af20c817837ee2d64f8c8edf2277f75c6ed7ff4ff6466d41'] 
    }
  }
};
