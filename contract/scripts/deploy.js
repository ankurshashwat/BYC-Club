const hre = require("hardhat");

async function main() {
  const BycClub = await hre.ethers.getContractFactory("BycClub");
  const bycclub = await BycClub.deploy();

  await bycclub.deployed();

  console.log("BycClub deployed to:", bycclub.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});