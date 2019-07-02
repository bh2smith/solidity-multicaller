pragma solidity ^0.5.0;


contract MultiCaller {

    function executeWithFunctionName(
        address contractAddress,
        uint numCalls,
        string memory functionName
    ) public returns (bool) {
        executeWithCalldata(
            contractAddress, numCalls, abi.encodeWithSignature(functionName)
        );
    }

    function executeWithCalldata(
        address contractAddress,
        uint numCalls,
        bytes memory _calldata
    ) public returns (bool) {
        for (uint i = 0; i < numCalls; i++) {
            (bool success, ) = contractAddress.call(_calldata);
            require(success, "One or more of the transactions failed!");
        }
    }
}