require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle"); // used for smart contract testing https://getwaffle.io/
require('dotenv').config();
const { API_URL, PRIVATE_KEY } = process.env;
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: { // used to connect localhost hardhat node to metamask
      chainId: 1337,
    }, 
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`] // DD NOT UPLOAD WITH PRIVATE KEY better to use env vars
    }
    
  },
};
