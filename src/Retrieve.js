// src/Retrieve.js
import React, { useState } from 'react';
import getWeb3 from './getWeb3';
import StorageContract from './contracts/Storage.json';

function Retrieve() {
  const [hash, setHash] = useState('');
  const [file, setFile] = useState(null);

  const onRetrieve = async (event) => {
    event.preventDefault();
    const web3 = await getWeb3();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = Storage.networks[networkId];
    const instance = new web3.eth.Contract(Storage.abi, deployedNetwork && deployedNetwork.address);

    const name = await instance.methods.getFile(hash).call();
    setFile(name);
    console.log('File retrieved:', name);
  };

  return (
    <div>
      <h2>Retrieve File</h2>
      <form onSubmit={onRetrieve}>
        <input
          type="text"
          placeholder="Enter file hash"
          value={hash}
          onChange={(e) => setHash(e.target.value)}
        />
        <input type="submit" />
      </form>
      {file && <div>File Name: {file}</div>}
    </div>
  );
}

export default Retrieve;
