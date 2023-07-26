import { ethers } from "hardhat";
import generateMetadata from "./generate-metadata";
import verify from "./verify";

const contractName = "Token";

async function deployAndVerify() {
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

  console.log("Generating Metadata...");
  await generateMetadata(contractName);

  console.log("Verifying...");
  await verify(contractName, contract.address);
}

deployAndVerify()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
