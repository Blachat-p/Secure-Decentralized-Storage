// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FileStorage {
    struct File {
        string ipfsHash;
        string fileName;
        string fileType;
        uint timestamp;
    }

    mapping(address => File[]) public files;

    function uploadFile(string memory _ipfsHash, string memory _fileName, string memory _fileType) public {
        File memory newFile = File({
            ipfsHash: _ipfsHash,
            fileName: _fileName,
            fileType: _fileType,
            timestamp: block.timestamp
        });

        files[msg.sender].push(newFile);
    }

    function getFiles() public view returns (File[] memory) {
        return files[msg.sender];
    }
}
