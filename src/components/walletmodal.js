import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from "@walletconnect/web3-provider";
import {useState} from "react";


export default function WalletModal() {
    const [loading, setLoading] = useState(false);

    return {
        get web3Loading() {
            return loading
        },

        async getWeb3() {
            const providerOptions = {
              walletconnect: {
                package: WalletConnectProvider, // required
                options: {
                  infuraId: "https://mainnet.infura.io/v3/39c30420efe84c7fbcc7f1579604e64f", // required
                  mobileLinks: [
                    "rainbow",
                    "metamask",
                    "trust"
                  ]
                }
              },
              metamask: {
                id: "injected",
                name: "MetaMask",
                type: "injected",
                check: "isMetaMask"
              }
            };
            
            const web3Modal = new Web3Modal({
              network: "mainnet", // optional
              cacheProvider: true, // optional
              providerOptions // required
            });
            
            const provider = await web3Modal.connect();
            
            let web3 = new Web3(provider);

            web3 = new Web3(provider);
                setLoading(false);
                return web3;
          }
    }
}