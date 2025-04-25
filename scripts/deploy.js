  const hre = require("hardhat");

  async function main() {
    const e = 65537;
    const n = "0x00bb021528ccf6a094d30f12ec8d5592c3f882f199a67a4288a75d26aab52bb9c54cb1af8e6bf975c8a3d70f4794145535578c9ea8a23919f5823c42a94e6ef53bc32edb8dc0b05cf35938e7edcf69f05a0b1bbec094242587fa3771b313e71cace19befdbe43b45524596a9c153ce34c852eeb5aeed8fde6070e2a554abb66d0e97a540346b2bd3bc66eb66347cfa6b8b8f572999f830175dba726ffb81c5add286583d17c7e709bbf12bf786dcc1da715dd446e3ccad25c188bc60677566b3f118f7a25ce653ff3a88b647a5ff1318ea9809773f9d53f9cf01e5f5a6701714af63a4ff99b3939ddc53a706fe48851da169ae2575bb13cc5203f5ed51a18bdb15"; // Replace this with the actual modulus in hex format
  
    const Contract = await hre.ethers.getContractFactory("VerifySSLCertificate", {
      libraries: {
        "contracts/ASN1Utils.sol:ASN1Utils": "0x12985787ee5Ccf01D5ED8806474310A0839f2FcB",
        "contracts/WTFUtils.sol:WTFUtils": "0x19A27382701b2835DA5373672969DF740176D23D"
      }
    });
  
    console.log("Deploying contract...");
  
    const contract = await Contract.deploy(e, n); 
    await contract.deployed();
  
    console.log("Contract deployed to:", contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  