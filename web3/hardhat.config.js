require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    deafultnetwork: 'goerli',
    networks: {
        hardhat: {},
        goerli: {
          url: 'https://rpc.ankr.com/eth_goerli',
          accounts: [`0x${prcoess.env.PRIVATE_KEY}`]
        }
    },
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  
};
