import Web3 from "web3";
import Web3Modal from "web3modal";

// ======// Wallet provider imports //=====
import WalletConnectProvider from '@walletconnect/web3-provider'

const INFURA_ID = '39c30420efe84c7fbcc7f1579604e64f'
// https://mainnet.infura.io/v3/

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: INFURA_ID // required
        }
      }
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
  theme: "dark"
});


const provider = await web3Modal.connect();

const web3 = new Web3(provider)

