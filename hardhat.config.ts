import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "@starboardventures/hardhat-verify";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";

require("dotenv").config();

const {
  PRIVATE_KEY,
  ETHERSCAN_API_KEY,
  POLYGONSCAN_API_KEY,
  ALCHEMY_MUMBAI_URL,
  ALCHEMY_GOERLI_URL,
} = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  // defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    goerli: {
      url: ALCHEMY_GOERLI_URL,
      accounts: [PRIVATE_KEY!],
    },
    polygon_mumbai: {
      url: ALCHEMY_MUMBAI_URL,
      accounts: [PRIVATE_KEY!],
    },
  },
  starboardConfig: {
    baseURL: "https://fvm-api.starboard.ventures",
    network: "Calibration", // if there's no baseURL, url will depend on the network.  Mainnet || Calibration
  },
};

export default config;
