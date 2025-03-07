const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

const contractAddress = "YOUR_CONTRACT_ADDRESS";  // Replace with your contract address
const abi = [/* YOUR CONTRACT ABI */];  // Replace with your contract ABI
const contract = new web3.eth.Contract(abi, contractAddress);
const IPFS = require('ipfs-http-client');
const ipfs = IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

async function uploadFile(file) {
    const added = await ipfs.add(file);
    const hash = added.path; // This is the hash of the uploaded file
    return hash;
}

async function retrieveFile(hash) {
    const stream = ipfs.cat(hash);
    let data = '';
    for await (const chunk of stream) {
        data += chunk.toString();
    }
    return data;
}
