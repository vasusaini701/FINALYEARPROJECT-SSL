const hre = require("hardhat");

async function main() {
  // Get the contract to deploy
  const ASN1Utils = await hre.ethers.getContractFactory("ASN1Utils",{
  libraries: {
    WTFUtils: "0x9A5b1A6A8827B05DE693c9458be807605CA05c39"   // replace with actual library address
  }
});
  console.log("Deploying ASN1Utils library...");

  // Deploy the contract
  const asn1Utils = await ASN1Utils.deploy();
  await asn1Utils.deployed();

  console.log("ASN1Utils deployed to:", asn1Utils.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
