pragma solidity ^0.5.0;


contract MultiCaller {

    function execute(address contractAddress, uint numCalls, string memory functionName) public returns (bool) {
        bool success = true;
        bool next;
        for (uint i=0; i < numCalls; i++) {
            (next, ) = contractAddress.call(abi.encodeWithSignature(functionName));
            success = success && next;
        }
        require(success, "One or more of the transactions failed!");
    }
}