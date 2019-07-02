pragma solidity ^0.5.0;


contract DummyContract {
    uint public value;

    function alwaysRevert() public payable {
        revert("I always revert!");
    }

    function incrementValue() public {
        value++;
    }

    function incrementBy(uint increment) public {
        value = value + increment;
    }
}