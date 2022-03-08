require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remember equip half kitchen success situate'; 
let testAccounts = [
"0x54a6de1ac384a52d2705d884a5a6f3fabd59d0de35889211017feb1dae9afa4d",
"0x716e1e30d4769e51b2bfb307038281bd2c86ebe9217cec237946f795bc6af930",
"0x1e2fabe0281a007030af00c2c9d47782780496ca643b6a904abd88e60eee988f",
"0xb4fd1f65318696fb2832d20ad1b60d280ea6dae49aee6acf516d936a717130d7",
"0xfa0399b118bdf8bdc1849b48f7151e9f5a908239f7682643b995b1831b197029",
"0x1078e08ebc904db9c7c29851adcb099d75fe96668b973ed75439429f5e989894",
"0xff179909b9a54729d0057b770f8f0e83782fa4c0c33baf2f524e0010653eaeae",
"0x8727e261d1646976c8ddc9d13e3e745b64c38ef2218a8ff9322bb9ae51069a96",
"0x989f705cd411d2819e6f5110f1cd81af55f4159ce20aa4e29b59842876a86e20",
"0x6374a7a980ef9d1b30fa738e2f7a930d1750f67fe64247d17165b8f7fd4d263f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

