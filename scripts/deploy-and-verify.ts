import {
  StarboardVerify,
  generateMetadata,
} from "@starboardventures/hardhat-verify/dist/src/utils";
import { ethers } from "hardhat";

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

  // Verify contract
  console.log("Verifying...");
  const verify = new StarboardVerify({
    // network: 'Mainnet',
    network: "Calibration",
    contractName: contractName,
    contractAddress: contract.address,
  });
  await verify.verify();

  // Generate metadata (Optional)
  console.log("Generating Metadata...");
  await generateMetadata(contractName);
}

deployAndVerify()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
