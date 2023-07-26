import { StarboardVerify } from "@starboardventures/hardhat-verify/dist/src/utils";

async function verify(contractName: string, contractAddress: string) {
  const verify = new StarboardVerify({
    // network: 'Mainnet',
    network: "Calibration",
    contractName: contractName,
    contractAddress: contractAddress,
  });
  await verify.verify();
}
export default verify;
