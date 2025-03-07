// src/Upload.js
import React, { useState } from 'react';
import getWeb3 from './getWeb3';
import StorageContract from './contracts/Storage.json';
import ipfs from './ipfs';

function Upload() {
  const [buffer, setBuffer] = useState(null);
  const [account, setAccount] = useState('');
  const [storage, setStorage] = useState(null);

  const captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      setBuffer(Buffer(reader.result));
    };
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);

    const networkId = await web3.eth.net.getId();
    const deployedNetwork = Storage.networks[networkId];
    const instance = new web3.eth.Contract(Storage.abi, deployedNetwork && deployedNetwork.address);
    setStorage(instance);

    const result = await ipfs.add(buffer);
    const hash = result.path;
    await instance.methods.uploadFile(hash, 'example.txt').send({ from: accounts[0] });

    console.log('File uploaded to IPFS with hash:', hash);
  };

  return (
    <div>
      <h2>Upload File</h2>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={captureFile} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Upload;
