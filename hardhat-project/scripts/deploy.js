// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our NFTee contract.
*/
  const whiteListContract = await ethers.getContractFactory("Whitelist");

  // here we deploy the contract
  const deployedWhiteListContract = await whiteListContract.deploy(10);

  // wait for the contract to deploy
  await deployedWhiteListContract.deployed();

  // print the address of the deployed contract
  console.log("Whitelist Contract Address:", deployedWhiteListContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
