const hre = require("hardhat");

async function main() {
  // Get the contract to deploy
  const WTFUtils = await hre.ethers.getContractFactory("WTFUtils");
  console.log("Deploying WTFUtils library...");

  // Deploy the contract
  const wtfUtils = await WTFUtils.deploy();
  await wtfUtils.deployed();

  console.log("WTFUtils deployed to:", wtfUtils.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
