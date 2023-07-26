import { generateMetadata } from "@starboardventures/hardhat-verify/dist/src/utils";

async function genMetadata(contractName: string) {
  await generateMetadata(contractName);
}
export default genMetadata;
