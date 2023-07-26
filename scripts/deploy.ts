import { ethers } from "hardhat";

const contractName = "SimpleStorage";

async function deploy() {
  const provider = ethers.provider;
  const contractFactory = await ethers.getContractFactory(contractName);

  console.log("Deploying...");
  const contract = await contractFactory.deploy();
  await contract.deployTransaction.wait(2);
  console.log(
    `Deployment information:
     - Contract address: ${contract.address}
     - ChainId: ${ethers.provider.network.chainId}
     - Transaction: ${contract.deployTransaction.hash}`
  );
}

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
